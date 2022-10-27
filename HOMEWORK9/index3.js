const hTags = document.getElementsByTagName("h3");
const divTags = document.getElementsByTagName("div");

divTags[0].parentNode.insertBefore(divTags[0], hTags[0]);
divTags[1].parentNode.insertBefore(divTags[1], hTags[1]);
