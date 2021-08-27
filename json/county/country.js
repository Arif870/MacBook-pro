let loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => allCountries(data));
};
loadCountries();

let allCountries = countries => {
  let select = document.getElementById("selectCountry");

  countries.forEach(country => {
    let option = document.createElement("option");
    option.innerText = country.name;
    select.appendChild(option);
  });
};
