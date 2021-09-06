let addToCart = () => {
  let inputField = document.getElementById("input-field");
  let name = inputField.value;

  listItem(name);
  // set local storage
  getCart(name);
  inputField.value = "";
};

// get the products

let listItem = name => {
  let ul = document.querySelector(".products ul");

  let li = document.createElement("li");
  li.innerText = name;

  ul.appendChild(li);
};

// check the localstorage

let getCart = name => {
  let cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = [name];
    let cartSrt = JSON.stringify(cartObj);
    localStorage.setItem("cart", cartSrt);
  }
  return cartObj;
};
