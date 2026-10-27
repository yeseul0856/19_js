// 조건문
// 자바스크립트
// if(조건식) {
//     조건식이 참일때 수행할 명령
// }

//  if문 한줄일때는 중괄호를 안해도 된다

// 파이썬
// if 조건식:
//     조건식이 참일때 수행할 명령

// let num = 11;

// if (num >= 10) {
//   console.log("num은 10 이상입니다.");
// }

// if (조건식) {
//     참일때 수행할 코드
// } else {
//     거짓일때 수행할 코드
// }

// let num = 9;

// if (num >= 10) {
//   console.log("조건 일치");
//   console.log("num은 10 이상입니다.");
// } else {
//   console.log("조건 불일치");
//   console.log("num은 10보다 작습니다.");
// }

// 자바스크립트 else if문
// let num = 5;
// if (num >= 10) {
//   console.log("num 은 10 이상입니다.");
// } else if (num >= 5) {
//   console.log("num은 5 이상입니다.");
// } else {
//   console.log("num은 5 미만입니다.");
// }

// 파이썬 else if문
// if num >= 10:
//   console.log("num 은 10 이상입니다.");
// elif num >= 5:
//   console.log("num은 5 이상입니다.");
// else:
//   console.log("num은 5 미만입니다.");

// switch문

let fruit = "apple";

switch (fruit) {
  case "apple": {
    console.log("사과");
    break;
  }
  case "banana": {
    console.log("바나나");
    break;
  }
  default: {
    console.log("우리가 찾는 과일이 아님");
  }
}
