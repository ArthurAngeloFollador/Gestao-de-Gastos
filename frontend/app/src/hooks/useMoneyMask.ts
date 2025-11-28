import { useState } from "react";

export function useMoneyMask(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  function formatMoney(raw: string) {
    const clean = raw.replace(/\D/g, "");
    const numeric = Number(clean) / 100;

    return numeric.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(formatMoney(e.target.value));
  }

  function getRawValue() {
    const clean = value.replace(/\D/g, "");
    return Number(clean) / 100;
  }

  return { value, onChange, getRawValue };
}
