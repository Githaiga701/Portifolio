import assert from "node:assert/strict";
import test from "node:test";
import { createTimestamp, getDarajaConfig, normalizeKenyanPhoneNumber } from "./mpesa";

test("normalizes common Kenyan M-Pesa number formats", () => {
  assert.equal(normalizeKenyanPhoneNumber("0712 345 678"), "254712345678");
  assert.equal(normalizeKenyanPhoneNumber("+254 712 345 678"), "254712345678");
  assert.equal(normalizeKenyanPhoneNumber("712345678"), "254712345678");
  assert.equal(normalizeKenyanPhoneNumber("0800 123 456"), null);
});

test("creates the Daraja timestamp format", () => {
  assert.equal(createTimestamp(new Date(2026, 9, 23, 8, 5, 9)), "20261023080509");
});

test("requires all Daraja credentials", () => {
  assert.equal(getDarajaConfig({ MPESA_CONSUMER_KEY: "key" }), null);
  assert.equal(
    getDarajaConfig({
      MPESA_CONSUMER_KEY: "key",
      MPESA_CONSUMER_SECRET: "secret",
      MPESA_SHORTCODE: "123456",
      MPESA_PASSKEY: "passkey",
      MPESA_CALLBACK_URL: "https://example.com/api/mpesa/callback",
      MPESA_ENVIRONMENT: "production",
      MPESA_TRANSACTION_TYPE: "CustomerBuyGoodsOnline",
    })?.environment,
    "production",
  );
});
