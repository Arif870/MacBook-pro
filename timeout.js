console.log("Happy coding");
setTimeout(() => {
  console.log("Dont be late");
}, 5000);

let number = 0;

let val = setInterval(() => {
  number++;
  console.log(number);

  if (number === 10) {
    clearInterval(val);
  }
}, 1000);
