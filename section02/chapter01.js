// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 아주 큰 숫자를 저장할 때 사용
// 위 값들은 Falsy한 값으로써 조건문에서는 거짓으로 평가된다.

if (!f1) {
  console.log("Falsy");
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};
// 문자열, 숫자값, 객체, 함수 모두 조건식에서는 참으로 평가된다.

if (t1) {
  console.log("Truthy");
}

// 3. 활용 사례
function printName(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없다");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);

function printName(person) {
  if (!person) {
    console.log("person의 값이 없다");
    return;
  }
  console.log(person.name);
}
/**
 * person 매개변수 값이 null, undefined으로 들어왔을경우에는 이 조건문에서 거짓으로 평가하기 때문에
 * not 연산자와 함께 true가 되어서 조건식이 참이 되면서 내부의 코드를 실행하고 함수가 종료된다.
 *
 * 반대로 실제 객체값이 들어왔을 경우에는 [ let person = { name = "몽블랑"}; ]
 * 이런 객체값들은 모두 Truthy이기 때문에 이 조건식이 거짓이 되어서 결국 [ console.log(person.name); ]
 * 여기에 접근할 수 있도록 만들어 준다.
 */
