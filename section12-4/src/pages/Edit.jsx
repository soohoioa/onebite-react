import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DirayStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);
  /*
  const data = useContext(DirayStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);
    URL파라미터를 통해서 하나의 일기 데이터를 Context로부터 꺼내오는 작업을 하는 로직을 별도의 함수로 분리해준다.
    -> 각각의 컴포넌트들이 import를 통해 사용하게 해준다. -> 하지만 이런 기능들을 일반적인 함수로 분리하면 안된다.
    -> 해당함수 안에 useContext(), useEffect(), useState()기능을 사용해야 한다. -> react의 훅들은 일반적인 자바스크립트 함수에서는 절대로 이용할 수 없다.
    -> 그렇기 때문에 일반적인 함수로는 분리가 안되고 기능들을 별도의 커스텀 훅으로 만들어 준다.
    -> useDiary라는 커스텀 훅을 만들어준다. 
  */
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      // 일기를 삭제하는 로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  /** 
  const getCurrentDiaryItem = () => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    return currentDiaryItem;
  };
  const currentDiaryItem = getCurrentDiaryItem();
  console.log(currentDiaryItem);
  */

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
