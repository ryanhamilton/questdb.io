export const formatPrice = (
  num: number,
  options?: Intl.NumberFormatOptions,
) => {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    ...options,
  })
}
