// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log("현재 날짜 : " + date1);

let date2 = new Date("1997-01-07.10:10:10"); // - . / , 네가지중 한가지 사용가능
//console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 UTC "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
//console.log(ts1);

let date3 = new Date(ts1);
//console.log(date1, date3);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
// 자바스크립트에서 월은 0부터 시작하므로 +1 을 해준다.
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log("추출 날짜 : " + year + "년" , month + "월", date + "일", 
hour + "시", minute + "분", seconds + "초");

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

//console.log("수정된 날짜 : " + date1);

// 5. 시간을 여러 포맷으로 출력하기
//console.log(date1.toDateString()); // 시간제외 날짜만 출력
//console.log(date1.toLocaleString());