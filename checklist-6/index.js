// 1  /

let profile = {
  name: "Arif-uz-zaman",
  hobby: ["cricket", "football", "fishing"],
  address: {
    present: "uttara",
    Permanent: "Barura",
  },

  sayHi: function () {
    return this.address;
  },
};

// console.log(profile.sayHi());

// 2  /

let age = `My name is ${profile.name} My age is 24. My hobby is ${profile.hobby[1]} and my address ${profile.address.present}`;

// console.log(age);

// 3.1  /

let value = () => 89;
// console.log(value());

// 3.2  /

let divided = number => number / 7;
// console.log(divided(49));

// 3.3  /

let func = (num1, num2) => {
  let add = num1 + num2;
  let res = add / 2;

  return res;
};

console.log(func(2, 2));

// 3.4  /

let func2 = (num1, num2) => {
  let add1 = num1 + 7;
  let add2 = num2 + 7;
  let res = add1 + add2;
  return res;
};

console.log(func2(2, 2));

// 3.5  /

let arr = [101, 20, 10, 32, 10, 30];

let foreach = arr.forEach(num => console.log(num));
console.log(foreach);
let a = arr.map(a => a + 7);

console.log(a);
console.log(arr);
