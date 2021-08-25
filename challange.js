// ********** Challange  1 ********** //

let name = "Arif";
const job = "web developer";

// ********** Challange  2 ********** //

let obj = {
  contact: "01955957901",
  address: "uttara",
};

let str = `I am ${name} and i am ${job}. My contact number ${obj.contact} and address ${obj.address}`;

// ********** Challange  3 ********** //

let arrow = number => number / 5;

console.log(arrow(10));

// ********** Challange  4 ********** //

let problem4 = (num1, num2) => {
  let new1 = num1 + 2;
  let new2 = num2 + 2;
  return new1 * new2;
};

console.log(problem4(2, 2));

// ********** Challange  5 ********** //

let problem5 = (x, y, z) => x * y * z;
console.log(problem5(2, 3, 4));

// ********** Challange  6 ********** //

let arr = [2, 4, 6, 8, 10];

console.log(arr.map(x => x * 5));

// ********** Challange  7 ********** //

let products = [
  { name: "laptop", price: 10000 },
  { name: "mobile", price: 4000 },
  { name: "monitor", price: 5000 },
  { name: "ssd", price: 5000 },
];

console.log(products.find(product => product.price == "5000"));

// ********** Challange  8 ********** //

let obj2 = {
  name: "arif",
  job: "bekar",
};
let x = obj2.name;
console.log(x);

// ********** Challange  9 ********** //

let arr3 = ["Arif", "sumaiya", "zaman", "khan"];
let [one, two, three] = arr3;

console.log(three);

// ********** Challange  10 ********** //

let problem10 = (a, b, c = 7) => a + b + c;

console.log(problem10(2, 3));

// ********** Challange  10 ********** //

let obj10 = {
  name: "mofiz khan",
  address: "adda",
  chooseNumber: [2, 4, 5, 6],
  public: {
    name: "yunos khan",
    address: "uttara",
  },
};

let result = obj10.public.name;

console.log(result);
