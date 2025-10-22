export type FormatMode = "signed" | "balance" | "masked";

export interface FormatOptions {
  mode?: FormatMode; //"signed", "balance", "masked"
  locale?: string; //for "en-US", "pt-BR"
  currency?: string; //for "USD" or "BRL"
  minimumFractionDigits?: number; //fraction digits
  showPlusForPositive?: boolean; //used with "signed" mode
  maskChar?: string; //default "*"
}

export function formatCurrency(
  amount: number,
  opts: FormatOptions = {}
): string {
  const {
    mode = "signed",
    locale = "en-US",
    currency = "USD",
    minimumFractionDigits = 2,
    showPlusForPositive = true,
    maskChar = "*",
  } = opts;

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
  });

  const absFormatted = formatter.format(Math.abs(amount));
  const isNegative = amount < 0; //return a boolean result for the variable based on the condition "amount < 0"

  if (mode === "masked") {
    const sign = isNegative ? "-" : "";

    const withoutSign = absFormatted.replace(/^-/, "");
    // "//"" is for delimiting the expression
    // "^" is for delimiting the beginning of the expression
    // "-" is for representing the "-" as hifen and not the operator in the Regex

    // to replace every number for maskChar
    const masked = withoutSign.replace(/\d/g, maskChar);
    // "\d" is for representing any number
    // "g" is for representing global search and not only the first one

    return sign + masked;
  }

  if (mode === "balance") {
    // shows '-' when negative and positive without signal
    return isNegative ? `-${absFormatted}` : absFormatted;
  }

  //default: "signed"
  if (mode === "signed") {
    if (isNegative) return "-" + absFormatted;
    return showPlusForPositive ? "+" + absFormatted : absFormatted;
  }

  // fallback
  return (isNegative ? "-" : "") + absFormatted;
}
