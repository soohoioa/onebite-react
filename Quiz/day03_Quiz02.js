/**
 * 다음 요구사항을 만족하는 isPrimeNumber함수를 완성하세요
 *
 * - 함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다.
 * - num이 소수라면 true를, 아니라면 false를 반환합니다.
 */

function isPrimeNumber(num) {
  let count = 0;

  for (let idx = 0; idx <= num; idx++) {
    if (num % idx === 0) {
      count++;
    }
  }
  return count <= 2 ? true : false;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));