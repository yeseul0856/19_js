// a에 들어있는 값을 어디까지 쓸수 있는지
// 이거를 우리는 전역 변수라고 한다
// let a = 1;

// function foo() {
//   console.log(a);
// }

// function bar() {
//   console.log(a);
// }

// foo();
// bar();
// console.log(a);

// 함수 안에서만 쓸수있는 함수 지역 변수
// 함수 안에서만 쓸수 있는 함수는 안에서만 사용할수 있다

// function foo() {
//   let a = 1;
// }

// console.log(a);

// 조건문 안에서 사용한 a {}블락안에서 설정된건 안에서만 쓸수 있다
// if (true) {
//   let a = 1;
// }

// console.log(a);

// 반복문 안에서만 쓸수 있는 a랑 i
// for (let i = 0; i < 10; i++) {
//   let a = 1;
// }

// console.log(a);
// console.log(i);

// foo 함수는 밖에 있고 전역에 있다
// function foo() {
//   console.log("foo");
// }

// function bar() {
//   foo();
//   console.log("bar");
// }

// bar();

// 전역적으로 쓸수있는 메모리가 있는데 거기에 foo라는 함수를 올려놓은거고
// foo에서 쓸수 있는 메모리 위에는 bar가 있는데 bar에 있는 함수를 호출하려면
// foo에 있는 메모리 이기 때문에 실행이 안된다
// 이걸 실행하려면 밑에 코드 처럼 적으면 된다
// function foo() {
//   console.log("foo");

//   function bar() {
//     console.log("bar");
//   }
// }

// bar();

// 위에껄 실행하려면 이렇게 적어야 한다
// function foo() {
//   console.log("foo");

//   function bar() {
//     console.log("bar");
//   }
//   bar();
// }

// foo();

// if (true) {
//   function foo() {
//     console.log("bar");
//   }
// }

// foo();

// for (let i = 1; i < 10; i++) {
//   function bar() {
//     console.log("bar");
//   }
// }

// bar();

// 블록 함수 스코프

// var로 선언하면 밖에서도 쓸수있다
// if (true) {
//   var a = 1;
// }

// console.log(a);

// function foo() {
//   var a = 1;
// }
// console.log(a);
