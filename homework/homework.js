let second = () => {
  console.log("second");
};

let third = () => {
  setTimeout(second, 5000);
  console.log("third");
};

let first = () => {
  third();
  console.log("first");
};
first();
