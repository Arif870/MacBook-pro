let obj = {
  name: "Arif",
  job: "developer",
  address: "uttara",
  contact: "01955958901",
  popularFood: ["biriyani", "kacci"],
};

console.log(obj);
let stringified = JSON.stringify(obj);
console.log(stringified);
let simpleobj = JSON.parse(stringified);
console.log(simpleobj.popularFood);
