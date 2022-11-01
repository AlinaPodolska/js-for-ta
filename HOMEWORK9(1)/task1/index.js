Array.from($("a")).forEach((a) => {
  const startsWithHttps = a.href.includes("https://");

  if (startsWithHttps) {
    a.target = "_blank";
  }
});
