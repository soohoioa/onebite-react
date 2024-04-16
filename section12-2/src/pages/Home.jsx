import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

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

      <DiaryList />
    </div>
  );
};

export default Home;
