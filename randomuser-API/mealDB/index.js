const btnClick = () => {
  const inputValue = document.getElementById("input-value");
  let inputValueText = inputValue.value;
  inputValue.value = "";
  if (inputValueText == "") {
    const errorMsg = document.getElementById("error");
    errorMsg.innerHTML = `
        <h1 class="text-center text-warning mt-5">vaire vai kico khanar name likhen!!</h1>`;
  } else {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValueText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => displayFood(data.meals));
  }
};
const displayFood = foods => {
  const section = document.getElementById("meals");
  section.textContent = "";
  foods.forEach(food => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card">
          <img src="${food.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <button onclick="loadDetails(${food.idMeal})" class="btn btn-outline-success mt-3">Details</button>
          </div>
        </div>`;
    section.appendChild(div);
  });
};
const loadDetails = mealId => {
  console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data.meals[0]));
};
const displayDetail = detail => {
  console.log(detail.strMeal);
  const mealDetails = document.getElementById("meal-details");
  mealDetails.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${detail.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${detail.strMeal}</h5>
            <p class="card-text">${detail.strInstructions.slice(0, 200)}</p>
          </div>
    `;
  mealDetails.appendChild(div);
};
// console.log(food.strMeal);
{
  /* ; */
}
