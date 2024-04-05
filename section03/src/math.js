// 간단한 계산 기능을 모아둔 math 모듈

export function add(a, b) {
  return a + b;
};

export function sub(a, b) {
  return a - b;
};

export default function multiply(a, b) {
  return a * b;
}
/** 
// CJS (Common JS모듈 시스템)
module.exports = {
  add,
  sub,
  // value값과 key값의 이름이 동일할경우 변수 & 함수 이름 하나만 명시해줘도 알아서 작동
}
*/

//export { add, sub }; // export 뒤에 객체를 리터럴로 생성해서 내보내고 싶은 값들을 담아준다.


