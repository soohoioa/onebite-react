// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)
// 두 가지 모두 동일한 객체를 생성한다.

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "몽블랑",
  age: 27,
  hobby: "테니스",
  job: "student",
  extra: {},
  20: 40, // key 값은 문자열이나 숫자열만 사용이 가능하다.
  "like cat": true, // name, age 와 같이 프로퍼티 key값에는 ""가 필요없지만 띄어쓰기를 사용한다면 예외적으로 ""를 사용해야 한다.
};
// : 를 기준으로 왼쪽은 key, 오른쪽은 value 값을 넣어준다
// 프로퍼티의 개수는 제한이 없고 value에 들어올수 있는 자료형의 타입도 제한이 없다.

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name; // 객체 이름뒤 . 을 적고 접근하고자 하는 프로퍼티의 키값을 적어준다.
//console.log(name);
// 점 표기법을 이용하면 객체에서 특정 프로퍼티값을 꺼내올 수 있다.
// 만약 존재하지 않는 프로퍼티에 접근한다면 오류가 발생하지 않고 Undefined가 반환된다. let name = person.name2;
let name2 = person.name2;
//console.log(name2);

let age = person["age"]; // 대괄호 안에 문자열로 접근하고자 하는 프로퍼티의 키를 명시하는 방법이다.
// 주의점은 기본적으로 ""와 같이 문자열로 적어줘야한다. ""없이 그냥 적어주면 age를 변수로 인식해 오류가 발생한다.
//console.log(age);
// 만약 존재하지 않는 프로퍼티에 접근한다면 오류가 발생하지 않고 Undefined가 반환된다. let age = person["age2"];

let property = "hobby";
let hobby = person[property];
console.log(hobby);
// 동적으로 프로퍼티를 꺼내와야 한다면 괄호 표기법을 이용. 그게 아니라면 문법이 간단한 점 표기법을 이용하는게 좋다.

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "FE";
person["favoriteFood"] = "떡볶이";
console.log(person);

// 3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";
console.log(person);

// 3-4. 프로퍼티를 삭제하는 방법
// 앞에 delete 를 사용한다.
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
// in 연산자는 왼쪽에 "name" 이라는 문자열, name에 해당하는 프로퍼티가 오른쪽에 있는 person 이 객체 안에 있느냐 없느냐를 물어보는 연산자
console.log(result1);

let result2 = "cat" in person;
console.log(result2);
// 특정 객체에 특정 프로퍼티가 존재하는지 유무까지 알 수 있다.
