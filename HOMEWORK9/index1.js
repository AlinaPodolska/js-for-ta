const links = document.getElementsByTagName("a");

Array.from(links).forEach((link) => {
  const startsWithHttps = link.href.includes("https://");

  if (startsWithHttps) {
    link.target = "_blank";
  }
});
