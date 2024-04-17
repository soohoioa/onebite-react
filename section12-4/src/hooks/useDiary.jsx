import { useContext, useState, useEffect } from "react";
import { DirayStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  // 함수 앞에 use라는 접두사가 붙으면 이 함수는 커스텀훅이 된다.
  // -> 커스텀훅에서는 useContext(), useEffect() 등 react 훅들도 자유롭게 호출이 가능하다.
  const data = useContext(DirayStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  const nav = useNavigate();

  useEffect(() => {
    // useEffect 컴포넌트가 랜더링 된 이후에 실행
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
