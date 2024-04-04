// 5가지 배열 변형
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환하는 메서드
let arr1 = [
  { name: "몽블랑", hobby: "테니스" },
  { name: "바닐라", hobby: "테니스" },
  { name: "코코아", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

/**
 * 간결하게 사용가능
const tennisPeople = arr1.filter(
  (item) => item.hobby === "테니스"
);
 */

//console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환하는 메서드
let arr2 = [1, 2, 3];
const mapReault1 = arr2.map((item, idx, arr) => {
  return item * 2;
}); 
//console.log(mapReault1);

let names = arr1.map((item) => item.name);
//console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
//console.log(arr3);

// 숫자열은 정상적으로 동작하지 않음 
// -> 배열을 사전순으로 정렬하기 때문에 숫자를 정렬하고 싶다면 sort 메서드에 조건으로 콜백함수() => {}를 넘겨줘야 한다
// 오름차순 (작은 숫자가 앞으로)
let arr4 = [3, 10, 7];
arr4.sort((a, b) => {
  if(a > b) {
    // b가 a 앞에 와라
    return 1; // -> b, a 배치
  } else if ( a < b) {
    // a가 b 앞에 와라
    return -1; // -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a, b 자리를 그대로 유지
  }
});
//console.log(arr4);

// 4. toSorted
// 원본 배열은 그대로, 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
//console.log(arr5);
//console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hello", "wor", "ed"];
const joined = arr6.join();
console.log(joined);