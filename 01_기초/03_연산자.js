// let numA = 1;
// let numB;
// let numC;

// numB = numC = numA;
// console.log(numA, numB, numC);

// let number = 10;
// number = number + 10;

// console.log(number);

// number += 10;
// console.log(number);

// number -= 10;
// console.log(number);

// 증감 연산자
// let a = 1;
// a++;
// console.log(a);

// let b = 1;
// b--;
// console.log(b);

// let a = 1;
// //a를 출력하고 그 다음 라인에 왔을때 변화된 값이 나온다
// console.log(a++);
// console.log(a);

// let b = 1;
// console.log(b--);
// console.log(b);

// let a = 1;
// console.log(++a);
// console.log(a);

// let b = 1;
// console.log(--b);
// console.log(b);

//논리 연산자
// let boolA = true;
// let boolB = false;

// // or 연산자
// // or 연산자는 연산에 참여하는 두 개의 피연산자 중 하나라도 참이면 참을 반환합니다.
// console.log(boolA || boolB);
// // and 연산자
// // and 연산자는 연산에 참여하는 두 개의 피연산자 중 하나라도 거짓이면 거짓을 반환합니다.
// console.log(boolA && boolB);

// // not 연산자
// console.log(!boolA);
// console.log(!boolB);

// 비교 연산자
// let numberA = 2;
// let numberB = 2;
// let numberC = "2";

// console.log(numberA > numberB);
// console.log(numberB >= numberC);

// console.log(numberA !== numberB);
// console.log(numberB !== numberC);
// console.log(numberB != numberC);

// console.log(numberA === numberB);
// console.log(numberB === numberC);

// console.log(numberA == numberB);
// console.log(numberB == numberC);

// null 병합 연산자
// let varA = 10;
// let varB = 20;
// let varC;

// // true면 varA를 출력하고 false는 varB를 출력해라
// console.log(varA ?? varB)
// console.log(varB ?? varC)

// 파이썬에서 or하면 앞에께 true면 앞에껄 출력하고 앞에께 false면 i를 출력하나??
// for i in Range(1, 100) {
//     print("Fizz" * i % 2 == 0 * "Buzz" * i % 3 == 0 or i )
// }

// 삼항 조건 연산자
// const varA = "안녕하세요";

// // console.log(typeof varA);

// // 조건식 ? 참일때 명령 수행 : 거짓일때 명령 수행
// // 엑셀(if(조건식, true, false))
// typeof varA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자 자료형이 아님");

let num = 1;
let result = num % 2 === 0 ? "짝수" : "홀수";

console.log(result);
