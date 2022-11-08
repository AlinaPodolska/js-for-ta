const getDateTime = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleDateString("ua-UA", {
    weekday: "short",
  });
  const month = currentDate.toLocaleDateString("ua-UA", { month: "short" });
  const date = currentDate.getDate();
  const fullYear = currentDate.getFullYear();

  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const dateTimeValue = `${dayOfWeek} ${month} ${date} ${fullYear} ${hour}:${minutes}:${seconds}`;

  return dateTimeValue;
};

module.exports = {
  getDateTime,
};
