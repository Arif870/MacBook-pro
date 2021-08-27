function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => getUsers(data));
}

function getUsers(data) {
  let ul = document.getElementById("users");
  for (let name of data) {
    let li = document.createElement("li");

    li.innerText = `Name : ${name.name} | Email : ${name.email}`;

    li.style.listStyle = "none";
    li.style.fontFamily = "poppins";
    li.style.lineHeight = "30px";
    li.style.backgroundColor = "cadetBlue";
    li.style.margin = "10px 0px";
    li.style.padding = "10px";
    li.style.color = "white";
    ul.appendChild(li);
  }
}

// get post by API

function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => allData(data));
}

function allData(data) {
  let post = document.getElementById("post");
  for (let posts of data) {
    let div = document.createElement("div");
    div.innerHTML = `<div class = 'card mt-4'><div class=card-header> <h1>${posts.title}</h1></div>
    <div class=class-body><p>${posts.body}</p></div> </div>`;

    post.appendChild(div);
  }
}

// post api

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "this is title",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then(response => response.json())
  .then(data => console.log(data));
