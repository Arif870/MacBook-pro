// let quoteLoads = () => {
//   fetch("https://api.kanye.rest/")
//     .then(response => response.json())
//     .then(response => getQuotes(response));
// };

// let getQuotes = quote => {
//   let allQuote = document.getElementById("viewQuote");

//   let p = document.createElement("p");
//   p.innerHTML = `<p>${quote.quote}</p>`;

//   allQuote.appendChild(p);
// };

let loadUsers = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => usersData(data));
};
loadUsers();

let usersData = users => {
  let allUsers = users.results;
  console.log(allUsers);
  let div = document.getElementById("user");
  for (let user of allUsers) {
    let p = document.createElement("p");
    p.innerText = `Name : ${user.name.title}. ${user.name.first} ${user.name.last}  | Email : ${user.email}`;

    div.appendChild(p);
  }
};
