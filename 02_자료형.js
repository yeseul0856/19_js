// 자바스크립트는 하나의 변수에 두개의 숫자를 동시에 적을수 없다.
// let age = 25, 30;
// console.log(age);

// 숫자형
// let age = 25;
// let tall = 175.9;
// let minus = -20;

// console.log(typeof age);
// console.log(typeof tall);
// console.log(typeof minus);

// 사칙연산
// console.log(1 + 2);
// console.log(1 * 2);
// console.log(1 - 2);
// console.log(1 / 2);

// 나머지 연산자랑 모듈러 연산자랑 같은 말이다
// console.log(1 % 2);

// let inf = Infinity;
// let mInf = -Infinity;
// // NaN -> not a number
// let nan = NaN;

// console.log(inf);
// console.log(mInf);
// console.log(nan);

// console.log(1 / 0);
// // Infinity는 무한대라는 뜻이다
// // not a number
// console.log("hello" * 2);
// console.log("hello" - 2);
// console.log("hello" / 2);

// console.log("hello" + 2);

// 문자형
// let myName = "이정환";
// let welcomeText = "님 반가워요!";
// let resultWelcomeText = myName + welcomeText;

// console.log(resultWelcomeText);

// let names = "이정환";
// let locations = "역곡";
// let introduce = `${names}은 ${locations}에 살고 있습니다.`;
// // ``백틱을 문자열 처럼 쓸 수 있다.
// let introduce2 = `홍길동은 알파시티에 살고 있습니다.`;

// console.log(introduce);
// console.log(introduce2);

// 불리언, null, undefined
// null은 값이 없다는 뜻이다.
// 변수를 생성만 하고 변수에 값이 없는게 undefined이다.

// let emptyVar = null;
// console.log(emptyVar);

// let realEmptyVar;
// console.log(realEmptyVar);

// let isSwitchOn = false;
// let isSwitchOn2 = true;
// let isSwitchOn3 = "true";
// console.log(isSwitchOn);
// console.log(isSwitchOn2);
// console.log(isSwitchOn3);
// console.log(typeof isSwitchOn);
// console.log(typeof isSwitchOn2);
// console.log(typeof isSwitchOn3);

// 형변환
// 파이썬 - 에러가 안나오고 자동으로 알아서 형변환을 해줌
// 자바스크립트 - 에러가 안나오고 자동으로 알아서 형변환을 해줌
// let number = 10;
// let string = "20";

// const result = number + string;
// console.log(result);
// console.log(typeof result);

// let strA = "10";
// let strB = "10개";

// let numA = Number(strA);
// let numB = Number(strB);

// console.log(numA);
// console.log(numB);
// console.log(typeof numA);
// console.log(typeof numB);

// // 오류가 날때 10을 출력해라?

// let str = "파이팅 2023";
// let num = parseInt(str, 10);
// console.log(num);

// let num = 2022;
// let str = String(num);

// console.log(str);
// console.log(typeof str);

let varA;
let varB = null;
let varC = true;

console.log(typeof varA);
console.log(typeof varB);
console.log(typeof varC);

let strA = String(varA);
let strB = String(varB);
let strC = String(varC);

console.log(typeof strA);
console.log(typeof strB);
console.log(typeof strC);
