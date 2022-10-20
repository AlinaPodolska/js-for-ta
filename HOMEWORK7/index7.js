// Data
const countriesMap = {
  ukraine: "ukraine",
  usa: "usa",
  canada: "canada",
};

const countriesCitiesMap = {
  [countriesMap.ukraine]: {
    kyiv: "kyiv",
    odesa: "odesa",
    vinnytsia: "vinnytsia",
  },
  [countriesMap.usa]: {
    newYork: "new york",
    sanDiego: "san diego",
    seattle: "seattle",
  },
  [countriesMap.canada]: {
    ottawa: "ottawa",
    manitoba: "manitoba",
    quebec: "quebec",
  },
};

// utils
const appendOptions = (target, [value, text]) => {
  const option = document.createElement("option");
  option.value = value;
  option.innerText = text;

  target.appendChild(option);
};

const printOutput = ({ outputTarget, countriesSelect, citiesSelect }) => {
  const country = countriesMap[countriesSelect.value];
  const city = countriesCitiesMap[country][citiesSelect.value];

  outputTarget.innerText = `${country} ---> ${city}`;
};

// elements
const countriesSelect = document.getElementById("countries");
const citiesSelect = document.getElementById("cities");
const output = document.getElementById("output");

const appendCitiesOptions = () =>
  Object.entries(countriesCitiesMap[countriesSelect.value]).forEach((data) =>
    appendOptions(citiesSelect, data)
  );

// initial setup
Object.entries(countriesMap).forEach((data) =>
  appendOptions(countriesSelect, data)
);

appendCitiesOptions();

printOutput({
  outputTarget: output,
  countriesSelect,
  citiesSelect,
});

// handle country change
countriesSelect.addEventListener("change", () => {
  citiesSelect.innerHTML = null;

  appendCitiesOptions();

  printOutput({
    outputTarget: output,
    countriesSelect,
    citiesSelect,
  });
});

// handle city change
citiesSelect.addEventListener("change", () => {
  printOutput({
    outputTarget: output,
    countriesSelect,
    citiesSelect,
  });
});
