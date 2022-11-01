const hTags = $("h3");
const divTags = $("div");

divTags.first().insertBefore(hTags.first());
divTags.last().insertBefore(hTags.last());
