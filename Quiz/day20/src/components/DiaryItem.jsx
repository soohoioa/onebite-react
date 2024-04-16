import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  // 1. DiaryDispatchContext -> onDelete 받아오기
  const { onDelete } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  // 2. 삭제시 실행할 이벤트 함수
  const onClickDelete = () => {
    if (window.confirm("정말 삭제합니까?")) {
      onDelete(id);
      alert("삭제되었습니다.");
    }
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>

      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}{" "}
        </div>
        <div className="content">{content}</div>
      </div>

      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
        {/* 3. 삭제 버튼 추가 */}
        <Button type={"NEGATIVE"} onClick={onClickDelete} text={"삭제하기"} />
      </div>
    </div>
  );
};
export default DiaryItem;
