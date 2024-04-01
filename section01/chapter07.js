// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 1;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; // 모듈러 연산자

let num6 = 1 + 2 * 10;
//console.log(num6);
let num7 = (1 + 2) * 10;
//console.log(num7);

// 3. 복합 대입 연산자
let num8 = 10;
num8 = num8 + 20;
num8 += 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 20;
//console.log(num8);

// 4. 증감 연산자
let num9 = 10;
num9++// ++를 변수명 뒤에 사용할경우 라인이 끝나야 1이 추가된다.
++num9; // 후위 연산자
console.log(num9++);
console.log(++num9);

// 5. 논리 연산자
let or = true|| false; // 한개만 참이여도 참이다.
let and = true && false; // 두개 모두 참이아야 참이다.
let not = !true; // 참이라면 거짓, 거짓이라면 참이된다.
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자 
console.log(comp1, comp2);

// == : 값의 자료형까지 같은지 비교가 안된다. 값 자체로만 비교하기 때문에
// === : 자료형까지 같이 비교한다.
let mom1 = 1 == "1";
let mom2 = 1 === "1";
console.log(mom1, mom2);

let comp3 = 2 > 1 ;
let comp4 = 2 < 1 ;
console.log(comp3, comp4);

let comp5 = 2 >= 2; // 왼쪽에 있는 값이 오른쪽에 있는 값보다 크거나 같은지 물어본다 
let comp6 = 2 <= 2; // 왼쪽에 있는 값이 오른쪽에 있는 값보다 작거나 같은지 물어본다 
console.log(comp5, comp6);