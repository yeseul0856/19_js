// arr1이 객체이기때문에 length(프로퍼티, (속성))를 쓸수 있다
// const arr1 = [1, 2, 3];
// console.log(arr1.length);

// arr1.push(4);
// console.log(arr1);

// 함수도 객체다
// function myFunction() {
//   console.log("hi");
// }

// console.log(myFunction.name);

// let person = {
//   name: "이정환",
// };

// let man = person;
// man.age = 25;

// console.log(person);
// console.log(man);

let numA = 1;
let numB = 1;

console.log(numA === numB);

let person = {
    name: "이정환",
}

let man = {
    name = "이정환",
}

console.log(person === man)