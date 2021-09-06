let timeOut = () => {
  setTimeout(() => {
    console.log("I am here !!");
  }, 3500);
};

// <!--  //  solution 2  \\  -->

let value = prompt("give your favourite number ... ");

let newVal = parseInt(value) + 200;
console.log(newVal);

<!--  //  solution 3  \\  -->

let con = confirm("Do you want to see your location ?");

if (con) {
  console.log(document.location.href);
}

let second = () => {
  console.log("Second");
};
let third = () => {
  console.log("Third");
};
let first = () => {
  console.log("First");
  third();
  setTimeout(second, 5000);
};

first();

///// call, bind and apply \\\\\

let myFun = () => {
  console.log(this);
  console.log(this.a + this.b);
};
myFun();
let obj = {
  a: 10,
  b: 20,
  c: 30,
};
function myFunc(c, d) {
  console.log(this.a + this.b + c + d);
}

myFunc.apply(obj, [2, 3]);
myFunc.call(obj, 2, 3);
const sumaiya = {
  name: "arif",
  money: 5000,
  treat: function (expense) {
    this.money = this.money - expense;
    return this.money;
  },
};
const total = sumaiya.treat(100);
console.log(total);
const sahera = {
  name: "jinan",
  money: 3000,
};
// const saheratrt = sumaiya.treat.bind(sahera);

// console.log(saheratrt(200));
console.log(sumaiya.treat.call(sahera, 400));
console.log(sumaiya.treat.apply(sahera, [100]));
