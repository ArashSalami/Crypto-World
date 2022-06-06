export const formatPrice = (price, min = 0, max = 0) => {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  });
};
