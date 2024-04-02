if (true) {
  let c = 1; // 지역 스코프
}
console.log(c); 

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프
}
console.log(d);