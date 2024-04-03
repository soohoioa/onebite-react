function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // 출력 : False 함수, false
console.log(returnTrue() && returnFalse()); // 출력 : True 함수, False 함수, false
console.log(returnTrue() || returnFalse()); // 출력 : True 함수, true

function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}
console.log(returnTrue() || returnFalse()); // 출력 : True 함수, 10
console.log(returnFalse() && returnTrue()); // 출력 : False 함수, undefined

// 단락 평가 활용 사례

function printName(person) {
  if (!person) {
    console.log("person의 값이 없다");
    return;
  }
  console.log(person.name);
} // 위 코드를 간략하게 표현 가능
function printName(person) {
  console.log(person && person.name);
}
printName(); // 출력 : undefined

// 다르게 간략하게 표현 가능
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없다");
}
printName(); // 출력 : person의 값이 없다
printName({ name: "몽블랑" }); // 출력 : 몽블랑
