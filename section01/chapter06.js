// 1. 묵시적 형변환 (암묵적 형변환)
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;;
let str = "20";

const result = num + str; // num이 묵시적으로 spring 로 형변환이 일어남 
console.log(result);
/**
 * 특정 하나의 변수의 값을 형변환 했을 때 오류가 발생하지 않고 연산이 되면 묵시적 형변환이 일어난다.
 * -> 여기서는 num 을 spring 문자열타입으로 형변환을 했다.
 */

// 2. 명시적 형변환
// -> 개발자가 내장함수(자바스크립트가 기본적으로 제공하는 함수) 등을 이용해서 직접 형 변환을 명시함
// 문자열 -> 숫자열
let str1 = "10";
let strToNum = Number(str1); // Number 이라는 내장함수를 사용해서 "10"을 숫자형으로 변경해줬다.
console.log(10 + strToNum);

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2);

let str3 = "10개";
let strToNum3 = parseInt(str3);
console.log(strToNum3);
// parseInt 사용시 숫자가 앞에 나와있어야 자연스럽게 형변환이 이루어진다.
// 만약 문자열이 앞에 오면 오류가 발생할수 있다.

// 숫자열 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");