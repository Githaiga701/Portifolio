import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type DarajaCallback = {
  Body?: {
    stkCallback?: {
      CheckoutRequestID?: string;
      ResultCode?: number;
      ResultDesc?: string;
    };
  };
};

export async function POST(request: NextRequest) {
  const payload = (await request.json().catch(() => null)) as DarajaCallback | null;
  const callback = payload?.Body?.stkCallback;

  if (!callback?.CheckoutRequestID || typeof callback.ResultCode !== "number") {
    return NextResponse.json({ ResultCode: 1, ResultDesc: "Invalid callback payload" }, { status: 400 });
  }

  // Add a database write here when tips need receipts or a public supporter feed.
  console.info("M-Pesa callback received", {
    checkoutRequestId: callback.CheckoutRequestID,
    resultCode: callback.ResultCode,
    resultDescription: callback.ResultDesc,
  });

  return NextResponse.json({ ResultCode: 0, ResultDesc: "Accepted" });
}
