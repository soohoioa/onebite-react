// 1. 콜백 함수
function main(value) {
  console.log(value);
  console.log(1);
  console.log(2);
  value();

}

function sub(value) {
  console.log("i am sub");
}
// main(sub); 또는

main(() => { // 이렇게도 작성이 가능
  console.log("i am sub");
});

// 2. 콜백함수의 활용
/*
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}
repeat(5);
repeatDouble(5);
작업하다보면 비슷한 함수들이 많아지는데 이를 간결한 코드로 사용가능.
*/

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
repeat(5, function (idx) {
  console.log(idx);
});