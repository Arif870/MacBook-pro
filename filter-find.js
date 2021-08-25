let numbers = [2, 4, 34, 21, 34, 55, 22];
let bigNumbers = numbers.filter(num => num > 20);
let smallNUmber = numbers.filter(num => num < 10);
console.log(bigNumbers);
console.log(smallNUmber);

let products = [
  { name: "laptop", price: 1300 },
  { name: "smart watch", price: 300 },
  { name: "balish", price: 100 },
];

let findProduct = products.filter(product => product.name == "laptop");
let productCost = products.find(p => p.price > 100);
console.log(findProduct);
console.log(productCost);
