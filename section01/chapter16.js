// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);
// 상수에 저장된 객체도 추가, 수정, 삭제하는 것이 가능하다.
// 새로운 값을 할당하는 것은 문제가 되지만 반면에 저장되어 있는 객체 값의 프로퍼티를 수정하는것은 문제 없다.

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "몽블랑",
  // 메서드
  sayHi: function () {
    // 익명함수, 화살표함수 모두 가능하다
    console.log("안녕!");
  },
};
person.sayHi();

const person2 = {
  name: "몽블랑",
  // 메서드
  sayHi: () => {
    // 익명함수, 화살표함수 모두 가능하다
    console.log("안녕!");
  },
};
person.sayHi();

const person3 = {
  name: "몽블랑",
  // 메서드 선언
  sayH() {
    // 화살표 함수보다 더 간결한 사용이 가능하다
    console.log("안녕!");
  },
};
person.sayHi();
person["sayHi"]();
// 객체의 동작을 정의하는데 사용된다.
