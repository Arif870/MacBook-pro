class team {
  name;
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  designation = "developer";
  myFun() {
    console.log("Arif");
  }
  address = "BD";
}

let obj = new team("Arif", "BD");
let obj2 = new team("Zaman", "Japan");
console.log(obj);
console.log(obj2);
