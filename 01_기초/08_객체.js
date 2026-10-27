// 객체 생성과 프로퍼티
// let objA = {};
// let objB = new Object();

// let person = {
//   name: "이정환",
//   age: 25,
//   age: 30,
// };

// console.log(person);

// 키값으로 두개의 단어를 띄어서 쓸수 없다(공백) 그래서 ""를 해준다
// 프로퍼티는 속성
// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };

// console.log(person.name);
// console.log(person["name"]);

// console.log(person["like cat"]);

// 프로퍼티 추가

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };

// person.gender = "male";
// person["nickname"] = "winderlood";

// console.log(person);

// 프로퍼티 수정
// let cat = {
//   name: "치삼이",
//   age: 4,
// };

// cat.name = "치삼";
// cat["age"] = 5;
// console.log(cat);

//프로퍼티 삭제
// let cat = {
//   name: "치삼이",
//   age: 4,
// };

// delete cat.name;
// delete cat["age"];

// const obj = {
//   a: 1,
//   b: "text",
// };

// obj.a = 2;
// obj.c = undefined;

// console.log(obj);

// in연산자

// let obj = {
//   a: 1,
// };

// console.log(obj.b);

// // console.log(obj.b)
// let isPropertyExist = obj.b !== undefined;
// console.log(isPropertyExist);

// let person = {
//   age: 10,
// };

// let isNameExist = "name" in person;
// console.log(isNameExist);

// 메서드 객체의 속성, 객체의 함수를 메서드라 한다
// 객체의 변수를 속성이라 하고 함수를 메서드라 한다

// let person = {
//   name: "이정환",
//   // 화살표 함수로 하면 => () => console.log("안녕")
//   sayHi: function () {
//     console.log("안녕");
//   },
// };

// // 함수를 실행시켜라
// person.sayHi();
