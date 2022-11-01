const getGreeting = (hour) => {
  const isMorning = hour >= 6 && hour < 12;
  const isDay = hour >= 12 && hour < 18;
  const isEvening = hour >= 18 && hour !== 00;
  const isNight = hour >= 00 && hour < 6;

  const good = "Good";

  if (isMorning) return `${good} morning`;
  if (isDay) return `${good} day`;
  if (isEvening) return `${good} evening`;
  if (isNight) return `${good} night`;
};

const greeting = (userName) => {
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

  const dateValue = `${dayOfWeek} ${month} ${date} ${fullYear} ${hour}:${minutes}:${seconds}`;

  return `
    <p>Date of request: ${dateValue}</p>
    <p>${getGreeting(hour)}, ${userName}</p>
 `;
};

module.exports = greeting;
