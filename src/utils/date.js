export const getMonth = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "long" };
  return date.toLocaleString("en-US", options);
};
