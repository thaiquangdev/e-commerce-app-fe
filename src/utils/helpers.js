export const formatPrice = (price) => {
  const formated = price?.toLocaleString("vi-VN");
  const finalFormated = `${formated}đ`;
  return finalFormated;
};

export const renderRangeNumber = (start, end) => {
  const length = end - start;
  return Array.from({ length }, (_, index) => start + index);
};
