// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // 매개변수(현재요소값, 현재반복카운트, 전체배열값)
  //console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach(item => {
  doubleArr.push(item * 2);
});
//console.log(doubleArr);

// 2. incudes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // 3은 존재하기 때문에 true를 반환, 만약 10처럼 존재하지 않는 값을 찾을려고 하면 false 반환
//console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3, 4, 5];
let index = arr3.indexOf("3");
//console.log(index);

/**
 * indexOf 와 findIndex 차이
 * 단순한 원시타입의 값을 찾을때는 indexOf사용
 * 복잡한 객체타입의 값을 찾을때는 findIndex사용
 */
let objectArr = [
  { name: "몽블랑" }, 
  { name: "홍길동" },
];

// console.log(
//   objectArr.indexOf({ name: "몽블랑" })
// );

// console.log(
//   objectArr.findIndex(
//     (item) => item.name === "몽블랑")
// );

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는(콜백함수가 참을 반환), 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(item => {
  if (item === 2) return true;
});
//console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
  { name: "몽블랑" }, 
  { name: "홍길동" },
];
const finded = arr5.find((item) => item.name === "몽블랑");
console.log(finded);