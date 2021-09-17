let loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => worldMap(data));
};
loadCountries();
let countryDOM = document.getElementById("countries");
let worldMap = countries => {
  for (let country of countries) {
    console.log(country);
    let div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `<img
          src="${country.flag}"
          alt=""
        />
        <h1>${country.name}</h1>
        <p>Capital : ${country.capital}</p>`;

    countryDOM.appendChild(div);
  }
};
