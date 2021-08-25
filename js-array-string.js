// let userName = "Arifuzzaman";
// let givenName = "arifuzzaman";

// if (userName.toLowerCase() == givenName.toLowerCase()) {
//   console.log("user-exits");
// }

let search = "Laptop";

let products = [
  "apple rainbow laptop",
  "apple new Laptop 2021",
  "xaomi laptop",
  "Apple watch",
  "xaomi watch",
];
let newarr = [];
for (let product of products) {
  if (product.indexOf(search) != -1) {
    newarr.push(product);
  }
}
