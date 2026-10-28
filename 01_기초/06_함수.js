// 함수선언
// 파이썬;
// def 함수명() :
//     수행할 코드

// 함수명()

// 자바스크립트
// function 함수명() {
//     수행할 코드
// }

// 함수명()

// function greetring() {
//   console.log("안녕하세요!");
// }

// console.log("함수 시작전");

// greetring();

// console.log("함수 종료");

// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;

//   console.log(area);
// }

// getArea();

// function getArea(width, height) {
//   let area = width * height;

//   console.log(area);
// }

// getArea(100, 200);

// 함수 반환
// function getArea(width, height) {
//   let area = width * height;
//   return area;
//   console.log("함수종료");
// }

// let result = getArea(10, 20);
// console.log(result);

// 중첩 함수
// function greeting() {
//   function greetingWithName(name) {
//     console.log(`hello! ${name}`);
//   }

//   let name = "이정환";
//   greetingWithName(name);
// }

// greeting();

// 함수와 호이스팅
// func();

// function func() {
//   console.log("hello");
// }

// 함수 표현식

// let greeting = function () {
//   console.log("hello");
// };

// greeting();

// 함수 표현식
// function greetFunc() {
//   console.log("hello");
// }

// // ()가 있으면 즉시 실행하는거고 ()가 없으면 함수를 받아온다
// let greeting = greetFunc;
// console.log(greeting);

// greeting();

// // parseInt에서 "1100", 2 를 하면 1100을 2진수로 표현한다
// console.log(parseInt("1100", 2));

// 콜백 함수
// 함수를 호출할때 인수에 함수를 집어 넣는 경우
// function parentFunc(callback) {
//   console.log("parent");
//   callback(); //이게 함수를 호출하는거니까 함수가 들어오게죠?
// }

// function childFunc() {
//   console.log("child");
// }

// parentFunc(childFunc);

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// repeat(5);

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// repeatDouble(5);

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }

// function origin(count) {
//   console.log(count);
// }

// repeat(5, origin);

// 이게 콜백함수에 필요한 이유는 나중에 리액트를 하면서 보도록 하겠습니다.
// 콜백함수 callBack이름을 callBack이라고 안하고 a라고 해도된다
// 콜랙 함수는 나중에 실행하라고 넘겨준 함수

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     // 0부터 시작하는데 1일 들어가는거지
//     // callBack에 double에 들어가고 *2가 된다
//     callBack(idx + 1);
//   }
// }

// function origin(count) {
//   console.log(count);
// }
// function double(count) {
//   console.log(count * 2);
// }
// repeat(5, double);

// 화살표 함수
// let funcA = (매개변수) => { 수행할 코드 }

// 한줄이기 때문에 {}, return 이 생략됨
// let greeting = (name) => `hello ${name}`;

// const greetingText = greeting("이정환");

// console.log(greetingText);

let isConfirm = true;

function confirm(onYes, onNo) {
  // let onYes = () => console.log("승인");
  if (isConfirm) onYes();
  else onNo();
}

// onYes가 이름없는 첫번째 함수의 이름이 되는거다 onNo는 두번째 함수이다
confirm(
  () => console.log("승인"),
  () => console.log("거부"),
);

// 이 위에 중괄호를 생략한 코드랑 같다
// if (isConfirm) {
//   onYes();
// } else {
//   onNo();
// }

// let isConfirm = true;

// confirm (
//   () => console.log("승인")
//   () => console.log("거부")
// )
