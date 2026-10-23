type MpesaEnvironment = "sandbox" | "production";

export type DarajaConfig = {
  environment: MpesaEnvironment;
  consumerKey: string;
  consumerSecret: string;
  shortcode: string;
  passkey: string;
  callbackUrl: string;
  transactionType: "CustomerPayBillOnline" | "CustomerBuyGoodsOnline";
};

export type StkPushInput = {
  amount: number;
  phoneNumber: string;
  accountReference: string;
  transactionDesc: string;
};

export type StkPushResult = {
  checkoutRequestId: string;
  merchantRequestId: string;
  customerMessage: string;
};

const requiredEnvironmentVariables = [
  "MPESA_CONSUMER_KEY",
  "MPESA_CONSUMER_SECRET",
  "MPESA_SHORTCODE",
  "MPESA_PASSKEY",
  "MPESA_CALLBACK_URL",
] as const;

export function getDarajaConfig(
  environment: Record<string, string | undefined> = process.env,
): DarajaConfig | null {
  if (requiredEnvironmentVariables.some((name) => !environment[name]?.trim())) {
    return null;
  }

  const configuredEnvironment = environment.MPESA_ENVIRONMENT === "production" ? "production" : "sandbox";
  const transactionType =
    environment.MPESA_TRANSACTION_TYPE === "CustomerBuyGoodsOnline"
      ? "CustomerBuyGoodsOnline"
      : "CustomerPayBillOnline";

  return {
    environment: configuredEnvironment,
    consumerKey: environment.MPESA_CONSUMER_KEY!.trim(),
    consumerSecret: environment.MPESA_CONSUMER_SECRET!.trim(),
    shortcode: environment.MPESA_SHORTCODE!.trim(),
    passkey: environment.MPESA_PASSKEY!.trim(),
    callbackUrl: environment.MPESA_CALLBACK_URL!.trim(),
    transactionType,
  };
}

export function normalizeKenyanPhoneNumber(value: string) {
  const digits = value.replace(/[^\d+]/g, "").replace(/^\+/, "");

  if (/^254[17]\d{8}$/.test(digits)) {
    return digits;
  }

  if (/^0[17]\d{8}$/.test(digits)) {
    return `254${digits.slice(1)}`;
  }

  if (/^[17]\d{8}$/.test(digits)) {
    return `254${digits}`;
  }

  return null;
}

export function createTimestamp(date = new Date()) {
  const pad = (value: number) => String(value).padStart(2, "0");

  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds()),
  ].join("");
}

function getBaseUrl(environment: MpesaEnvironment) {
  return environment === "production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";
}

async function getAccessToken(config: DarajaConfig) {
  const credentials = Buffer.from(`${config.consumerKey}:${config.consumerSecret}`).toString("base64");
  const response = await fetch(`${getBaseUrl(config.environment)}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: { Authorization: `Basic ${credentials}` },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Daraja could not authenticate this payment request.");
  }

  const payload = (await response.json()) as { access_token?: string };
  if (!payload.access_token) {
    throw new Error("Daraja did not return an access token.");
  }

  return payload.access_token;
}

export async function initiateStkPush(config: DarajaConfig, input: StkPushInput): Promise<StkPushResult> {
  const timestamp = createTimestamp();
  const password = Buffer.from(`${config.shortcode}${config.passkey}${timestamp}`).toString("base64");
  const accessToken = await getAccessToken(config);
  const response = await fetch(`${getBaseUrl(config.environment)}/mpesa/stkpush/v1/processrequest`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      BusinessShortCode: config.shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: config.transactionType,
      Amount: input.amount,
      PartyA: input.phoneNumber,
      PartyB: config.shortcode,
      PhoneNumber: input.phoneNumber,
      CallBackURL: config.callbackUrl,
      AccountReference: input.accountReference,
      TransactionDesc: input.transactionDesc,
    }),
    cache: "no-store",
  });

  const payload = (await response.json().catch(() => null)) as
    | {
        ResponseCode?: string;
        ResponseDescription?: string;
        CustomerMessage?: string;
        CheckoutRequestID?: string;
        MerchantRequestID?: string;
      }
    | null;

  if (!response.ok || payload?.ResponseCode !== "0" || !payload.CheckoutRequestID || !payload.MerchantRequestID) {
    throw new Error(payload?.ResponseDescription || "Daraja could not start the M-Pesa prompt. Please try again.");
  }

  return {
    checkoutRequestId: payload.CheckoutRequestID,
    merchantRequestId: payload.MerchantRequestID,
    customerMessage: payload.CustomerMessage || "Check your phone to complete the M-Pesa prompt.",
  };
}
