let loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => allCountries(data));
};
loadCountries();

let allCountries = countries => {
  let selectDiv = document.getElementById("selectCountry");
  for (let country of countries) {
    let option = document.createElement("option");

    option.innerText = country.name;

    selectDiv.appendChild(option);
  }
};
