export const paginate = (coins) => {
  const itemsPerPage = 50;
  const pages = Math.ceil(coins.length / itemsPerPage);
  const newCoins = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return coins.slice(start, start + itemsPerPage);
  });
  return newCoins;
};
