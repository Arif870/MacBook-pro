function makePurple() {
  document.body.style.backgroundColor = "purple";
}

let btn = document.getElementById("blue");
let blue = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

btn.onclick = blue;

let green = document.getElementById("green");

green.onclick = () => {
  document.body.style.backgroundColor = "green";
};

let pink = document.getElementById("pink");

pink.addEventListener("click", pinky);

function pinky() {
  document.body.style.backgroundColor = "pink";
}

let gray = document.getElementById("gray");

gray.addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
});

let h1 = document.getElementById("heading");

let button = document.getElementById("change");

button.addEventListener("click", () => {
  h1.innerText = "this heading from js";
});

document.getElementById("comment").addEventListener("click", () => {
  //   get the input value

  let commentArea = document.getElementById("commentArea");
  let commentvalue = commentArea.value;
  let p = document.createElement("p");
  p.innerText = commentvalue;

  document.getElementById("comments").appendChild(p);

  commentArea.value = "";
});

document.getElementById("delete").addEventListener("click", () => {
  document.getElementById("info").style.display = "none";
});

// focus event

document.getElementById("delete-input").addEventListener("focus", () => {
  document.body.style.backgroundColor = "red";
});

//blur event

document.getElementById("delete-input").addEventListener("blur", () => {
  document.body.style.backgroundColor = "white";
});

//get input value

document.getElementById("delete-input").addEventListener("keyup", event => {
  let val = this.event.target;
  let valuee = val.value;

  if (valuee == "delete") {
    document.getElementById("delete-btn").removeAttribute("1");
  } else {
    document.getElementById("delete-btn").setAttribute("disabled", true);
  }
});

document.getElementById("delete-btn").addEventListener("click", () => {
  document.getElementById("delete-text").innerText = "";
  val.value = " ";
});

let items = document.getElementsByClassName("item");

for (let item of items) {
  item.addEventListener("click", e => {
    // document.getElementById("unordered").removeChild(item);

    e.target.parentNode.removeChild(e.target);
  });
}

document.getElementById("add").addEventListener("click", () => {
  let list = document.createElement("li");

  list.innerText = "obama";
  console.log(list);
  let parentss = document.getElementById("unordered");
  console.log(parentss);
  parentss.appendChild(li);
  console.log(parentss);
  d;
});

let h2 = document.getElementsByTagName("h2");

for (let allh2 of h2) {
  allh2.style.color = "lightblue";
}

let card = document.getElementById("card");

card.style.width = "200px";
card.style.height = "200px";
card.style.backgroundColor = "tomato";
card.style.borderRadius = "30px";

function dd() {
  console.log("clicked !");
}

document.getElementById("button-group").addEventListener("click", e => {
  e.target.parentNode.removeChild(e.target);
});

let input = document
  .getElementById("remove-text")
  .addEventListener("keyup", e => {
    if (e.target.value == "delete") {
      document.getElementById("deleteBtn").removeAttribute("disabled");
    } else {
      document.getElementById("deleteBtn").setAttribute("disabled");
    }

    document.getElementById("deleteBtn").addEventListener("click", () => {
      document.getElementById("deleteText").innerText = "";

      e.target.value = "";
    });
  });

document.getElementById("image").addEventListener("mouseenter", e => {
  let image = document.getElementById("image");
  image.src = "./logo-black.png";
});
document.getElementById("image").addEventListener("mouseout", e => {
  let image = document.getElementById("image");
  image.src = "./logo-white.png";
});

document.getElementById("iffty").addEventListener("dblclick", e => {
  e.target.style.backgroundColor = "green";
});
