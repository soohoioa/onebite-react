// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);
// 함수도 숫자열, 문자열과 같이 하나의 값으로 취급하기 때문에 함수 자체를 변수안에 담을 수 있다.

let varB = function funcB() {
    console.log("funcB");
} // 여기서 funcB() 는 함수선언식이 아닌 값으로써 함수가 생성된것이라 함수 이름으로는 호출이 불가능하다.
// let varB = function () {} 식으로 이름을 생략해도 문제가 되지 않는다.
// 이렇게 이름이 없는 함수를 익명함수 라고 한다.

varB();

// 2. 화살표 함수
// 위 함수보다 간결하고 빠르게 생성해줄 수 있도록 도와주는 자바스크립트문법
let varC = () => {
    return 1;
}
console.log(varC());

// 값을 반환하기만 한다. (return 생략)
let varD = () => 1; // varD는 매개변수를 받지 않고 1이라는 값을 반환한다.
console.log(varD());

// 매개변수
let varE = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varE(10));