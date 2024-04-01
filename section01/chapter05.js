// 1. Number Type
let num1 = 11;
let num2 = 1.5;
let num3 = -10;

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대 

let nan = NaN; // not a number 수칙연산이 실패했을 때 결과값으로 사용
//console.log(1 * "hello!");

// 2. String Type
let myName = "몽블랑"; // 문자열 만들때 "" 나 '' 를 사용해줘야 함
let myLocation = "서울시";
let introduce = myName + myLocation;
//console.log(introduce);

// 템플릿 리터럴 문법 
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;// 문자열 안에 변수의 값을 동적으로 넣을 수 있다.
//console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;
// 현재의 상태를 나타내는데 주로 사용한다.

// 4. Null Type (아무것도 없다.)
let empty = null;
console.log(empty);
// 0, 공백이 아님. 

// 5. Undefined Type
// 하나의 값만 포함하는 특수한 타입. 변수를 선언 후 변수에 어떠한 값도 넣지 않았을때 자동으로 할당이 되는 값.
let none;
console.log(none);

/**
 * Null 과 Undefined 는 의미는 같지만 조금 다르다.
 * 
 * Null : 명시적으로 직접 값을 할당해줘야 한다. 
 *      지금 아무런 값도 없다라고 표현할 때 사용.
 * Undefined : 진짜 변수를 선언 후 아무런 값도 할당하지 않았을때 자동으로 들어가는 값이다.
 *      변수를 미처 초기화 하지 못했거나 존재하지 않는 값을 불러올려고 할때 발생할수 있는 값
 */