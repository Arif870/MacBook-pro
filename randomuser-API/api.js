let loadUsers = () => {
  let url = "https://randomuser.me/api/?results=500";
  fetch(url)
    .then(response => response.json())
    .then(data => loadData(data.results));
};

loadUsers();

let loadData = data => {
  let row = document.getElementById("row");
  data.forEach(user => {
    console.log(user);

    let div = document.createElement("div");
    div.classList.add("col-sm-6");
    div.classList.add("col-md-4");
    div.innerHTML = `
          <div class="card">
            <img src="${user.picture.large}" />
            <div class="card-body">
              <h5 class="card-title">${user.name.title} ${user.name.first}</h5>
              <p class="m-0 text-secondary">${user.cell}</p>
              <p class="text-secondary">${user.email}</p>
              <p class="card-text">
                ${user.location.country}
                ${user.location.street.name}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        `;

    row.appendChild(div);
  });
};
