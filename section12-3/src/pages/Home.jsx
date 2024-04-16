import { useState, useContext } from "react";
import { DirayStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotDate, data) => {
  // 이번달에 시작되는 시간 구하기
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1, // 해당하는 월에 1일
    0, // 0시
    0, // 0분
    0 // 0초
  ).getTime();

  // 이번달에 마지막 시간 구하기
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, // 어떤 달에 0일 이렇게 설정해주면 해당하는 달에 이전달에 마지막 날짜로 설정된다.
    23, // 23시
    59, // 59분
    59 // 59초
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DirayStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaerMouth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }; // 다음 달
  const onDecreaerMouth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }; // 이전 달

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월 `}
        leftChild={<Button onClick={onDecreaerMouth} text={"<"} />}
        rightChild={<Button onClick={onIncreaerMouth} text={">"} />}
      />

      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
