const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => displayCountry(data));
};

loadCountries();

const displayCountry = (countries) => {
  //console.log(countries);
  const countryElement = document.getElementById("countries");
  for (const country of countries) {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button id='space' onclick="loadCountry('${country.name}')">Click me</button>`;
    countryElement.appendChild(div);
    /*  const h3 = document.createElement("h3");
    h3.innerText = country.name;
    div.appendChild(h3);
    const p = document.createElement("p");
    p.innerText = country.capital;
    div.appendChild(p);*/
    countryElement.appendChild(div);
  }
};

/* const loadCountryByName = (name) => {
  console.log(name);
};
 */

const loadCountry = (countries) => {
  console.log(countries);
  fetch(`https://restcountries.eu/rest/v2/name/${countries}`)
    .then((response) => response.json())
    .then((data) => countryDetail(data[0]));
};

const countryDetail = (country) => {
  console.log(country);
  const countryElement = document.getElementById("details");
  const p = document.createElement("p");
  countryElement.innerHTML = `
 <h4>${country.name} and “${country.alpha2Code}</h4>
 <img height="100px" weight="100px" src="${country.flag}">
  `;
  // countryElement.appendChild(p);
};
