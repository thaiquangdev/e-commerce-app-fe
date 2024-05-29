export const formatPrice = (price) => {
  const formated = price.toLocaleString("vi-VN");
  const finalFormated = `${formated}đ`;
  return finalFormated;
};
