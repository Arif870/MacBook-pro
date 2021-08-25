let products = [
  {
    name: "apple phone",
    price: "12000",
  },
  {
    name: "samsung phone",
    price: "4333",
  },
  {
    name: "asus laptop",
    price: "11000",
  },
  {
    name: "apple laptop",
    price: "8000",
  },
];

function searchProduct(products, searctText) {
  let newProducts = [];
  for (let product of products) {
    if (product.name.indexOf(searctText) != -1) {
      newProducts.push(product);
    }
  }
  return newProducts;
}

let myProduct = searchProduct(products, "phone");
console.log(myProduct);
