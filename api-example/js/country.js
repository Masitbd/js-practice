const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => displayCountry(data));
};

loadCountries();

const displayCountry = (countries) => {
  console.log(countries);
  const countryElement = document.getElementById("countries");
  for (const country of countries) {
    const div = document.createElement("div");
    div.classList.add("country");
    const h3 = document.createElement("h3");
    h3.innerText = country.name;
    div.appendChild(h3);
    const p = document.createElement("p");
    p.innerText = country.capital;
    div.appendChild(p);
    countryElement.appendChild(div);
  }
};
