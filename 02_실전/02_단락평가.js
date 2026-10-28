// AND 단락 평가
// function calcA() {
//   console.log("a");
//   return false;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }
// // 앞에가 false이기 때문에 뒤 calcB는 실행이 안된다
// console.log(calcA() && calcB());

// AND 단락 평가를 이용해 오류 방지하기
// 오류일때 아무것도 없는 페이지를 보여주면 고객들은 나가기 때문에 그걸 방지하기 위해서
// 최소한을 만들어 내야 한다

// function calcA() {
//   console.log("a");
//   return undefined;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }

// console.log(calcA() && calcB());

// person이 아무것도 없는 상태에서 name속성을 하라고 하니까 name속성이 없으면 에러가 난다
// function getName(person) {
//   return person.name;
// }

// let person;
// let name = getName(person);

// console.log(name);

// function getName(person) {
//   if (person !== undefined) {
//     return person.name;
//   } else {
//     return "매개변수 객체가 아닙니다.";
//   }
// }

// let person;
// let name = getName(person);

// console.log(name);

// pserson이 매개변수로 들어가는 값은 undefined이다 그래서 매개변수 객체가 아닙니다.가 나온다

// function getName(person) {
//   return person && person.name;
// }

// let person = { name: "이정환" };

// let name1 = getName(undefined);
// let name2 = getName(null); //null falsy한 값이기 때문에 person.name까지 안가고 person을 출력한다
// let name3 = getName(person);

// console.log(name1);
// console.log(name2);
// console.log(name3);

// OR 단락평가
// function calcA() {
//   console.log("a");
//   return true;
// }

// function calcB() {
//   console.log("b");
//   return false;
// }

// // 앞이 true면 뒤에까지 안가고 true 가 된다
// console.log(calcA() || calcB());

// 앞이 truthy한 값이면 뒤에까지 안가고 true 가 된다
// const name = "이정환" || undefined;

// console.log(name);
