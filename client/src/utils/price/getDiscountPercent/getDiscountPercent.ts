export const getDiscountPercent = (listPrice: number, netPrice: number) => {
  const result = Math.floor(((listPrice - netPrice) / listPrice) * 100);
  return Number.isNaN(result) ? 0 : result;
};
