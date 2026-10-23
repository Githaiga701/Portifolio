import { NextRequest, NextResponse } from "next/server";
import { getDarajaConfig, initiateStkPush, normalizeKenyanPhoneNumber } from "@/lib/mpesa";

export const runtime = "nodejs";

const minimumTipAmount = 1;
const maximumTipAmount = 150000;
const attempts = new Map<string, { count: number; resetAt: number }>();

function rateLimit(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const key = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = attempts.get(key);

  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  if (current.count >= 4) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  if (rateLimit(request)) {
    return NextResponse.json({ error: "Please wait a minute before requesting another prompt." }, { status: 429 });
  }

  const config = getDarajaConfig();
  if (!config) {
    return NextResponse.json(
      { error: "M-Pesa tips are not configured yet. Please contact the site owner." },
      { status: 503 },
    );
  }

  let body: { amount?: unknown; phoneNumber?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please enter a valid tip request." }, { status: 400 });
  }

  const amount = Number(body.amount);
  const phoneNumber = typeof body.phoneNumber === "string" ? normalizeKenyanPhoneNumber(body.phoneNumber) : null;

  if (!Number.isInteger(amount) || amount < minimumTipAmount || amount > maximumTipAmount) {
    return NextResponse.json(
      { error: `Enter a whole amount between KES ${minimumTipAmount} and KES ${maximumTipAmount.toLocaleString("en-KE")}.` },
      { status: 400 },
    );
  }

  if (!phoneNumber) {
    return NextResponse.json({ error: "Enter a valid Kenyan M-Pesa number." }, { status: 400 });
  }

  try {
    const result = await initiateStkPush(config, {
      amount,
      phoneNumber,
      accountReference: "Githaiga Tip",
      transactionDesc: "Portfolio tip",
    });

    return NextResponse.json({ message: result.customerMessage, checkoutRequestId: result.checkoutRequestId });
  } catch (error) {
    console.error("M-Pesa STK Push failed", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to start the M-Pesa prompt." },
      { status: 502 },
    );
  }
}
