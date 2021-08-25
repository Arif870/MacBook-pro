// // 1. Checklist work
// let name = "Arif-uz-zaman";
// let age = 24;
// let isTrue = true;

// // 2. Checklist work

// let test1 = 12;
// const test2 = 20;
// var test3 = 22;

// test1 = 30;
// // const value can not be changed
// //test2 = 30;
// test3 = 78;

// console.log(test1);

// // 3. Checklist work

// let add = test1 + test2;
// console.log(add);

// // 7. Checklist work

// for (let i = 7; i <= 19; i++) {
//   console.log(i);
// }

// // 8 . Checklist work

// let arr = [1, 3, 4, 5, 6, 6];

// // arr.splice(3, 1, 10);
// // console.log(arr.length);
// // console.log(arr);

// // arr.push(100);
// // arr.pop();
// // arr.shift();
// // arr.unshift(100);

// for (let newArr of arr) {
//   console.log(newArr);
// }

// // 10. Checklist Work

// let arr = [10, 40, 80, 400, 3020, 402];

// for (let myArr of arr) {
//   if (myArr >= 80) {
//     console.log(myArr);
//   }
// }

// // 11  . Checklist Work

// function multy(a, b, c) {
//   return a * b * c;
// }

// let multiplication = multy(10, 10, 10);
// console.log(multiplication);

// // 12  . Checklist Work

// let obj = {
//   name: "Arif",
//   age: 42,
// };

// obj["age"] = 24;

// console.log(obj);

// // 13  . Checklist Work

// function feetToInchi(feet) {
//   return feet * 12;
// }

// let myVal = feetToInchi(5);

// console.log(`${myVal} inchies`);

// function centimeeterToMeter(centimeter) {
//   return centimeter / 100;
// }
// let myMeter = centimeeterToMeter(200);
// console.log(myMeter + " meter");

// // 14  . Checklist Work

// function paperRequirements(firstBook, secondBook, thirdBook) {
//   let paperFristBook = 100;
//   let paperSecondBook = 200;
//   let paperThirdBook = 300;

//   let totalFirstBookPaper = firstBook * paperFristBook;
//   let totalSecondBookPaper = secondBook * paperSecondBook;
//   let totalThirdBookPaper = thirdBook * paperThirdBook;

//   return totalFirstBookPaper + totalSecondBookPaper + totalThirdBookPaper;
// }

// let totalPapers = paperRequirements(1, 1, 2);
// console.log("Total Papers Requirements :", totalPapers);

// // 15 . Checklist Work

// let arr = ["Arif", "uz", "zaman", "khan", "sumaiya"];

// function bestFriend(friends) {
//   let word = "";
//   for (let i = 0; i < friends.length; i++) {
//     if (word.length < friends[i].length) {
//       word = friends[i];
//     }
//   }
//   return word;
// }

// console.log(bestFriend(arr));

// 16  . Checklist Work

let numbers = [1, 24, 45, 43, -10, 50];

let positiveArray = [];

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] < 0) {
    break;
  } else {
    positiveArray.push(numbers[i]);
  }
}

console.log(positiveArray);
