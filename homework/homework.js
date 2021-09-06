// 1.somo win

let n = 10;

function num(n) {
  n += 100;
  console.log(n);
}
num(n);
console.log(n);

// 2

let obj = {
  a: 10,
  b: 20,
};

function any() {
  let c = (obj.a = 100);
  let d = (obj.b = 200);

  console.log(c + d);
}
any();

console.log(obj);
