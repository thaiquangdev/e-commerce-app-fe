export const formatPrice = (price) => {
  const formated = price?.toLocaleString("vi-VN");
  const finalFormated = `${formated}đ`;
  return finalFormated;
};

export const renderRangeNumber = (start, end) => {
  const length = end - start;
  return Array.from({ length }, (_, index) => start + index);
};

export const formatDate = (date) => {
  let dateObject = new Date(date);

  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  let year = dateObject.getFullYear();
  let hours = dateObject.getHours();
  let minutes = dateObject.getMinutes();
  let seconds = dateObject.getSeconds();
  let formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
};
