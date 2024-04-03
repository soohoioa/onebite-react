// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "몽블랑",
  age: 27,
  hobby: "테니스",
};

//let { name, age, hobby } = person; // 객체를 상징하는 {} 를 사용한다.
//console.log(name, age, hobby);

let { age: myAge, hobby, name, extra = "hello" } = person;
//console.log(name, myAge, hobby, extra);

// 3.객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
