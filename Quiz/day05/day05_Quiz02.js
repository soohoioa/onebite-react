/**
목표: 학생들의 평균 성적을 출력합니다.
다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요
  - 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.
  - 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.
    - "{이름}: {평균}" 형태로 출력합니다.
 */
function printAvgScore(students) {
  for (let i in students) {
    let sum = 0;
    for (let j in students[i].scores) {
      sum += students[i].scores[j];
    }
    console.log(`${i} : ${sum / students[i].scores.length}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
