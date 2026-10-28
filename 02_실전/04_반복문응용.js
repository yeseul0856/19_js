// let arr = [1, 2, 3, 4];

// for (let idx = 0; idx < 4; idx++) {
//   console.log(arr[idx]);
// }

// let food = ["짜장면", "피자", "치킨"];

// for (let item of food) {
//   console.log(item);
// }

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도",
// };

// let keyArr = Object.keys(person);
// console.log(keyArr);

// for (let key of keyArr) {
//   console.log(key);
// }

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도",
// };

// const keyArr = Object.keys(person);
// console.log(keyArr);

// const valueArr = Object.values(person);
// console.log(valueArr);

let person = {
  name: "이정환",
  age: 25,
  location: "경기도",
};

for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
