const clickElementByValueAttr = async (elements, attrVal) => {
  for (let i = 0; i < elements.length; i++) {
    const val = await elements[i]?.getAttribute("value");

    if (val === attrVal) {
      await elements[i].click();
    }
  }
};

module.exports = {
  clickElementByValueAttr,
};
