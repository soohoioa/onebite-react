import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

/** 
const emotionList = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전나쁨" },
]; 
Editor 컴포넌트 뿐만 아니라 Viewer 컴포넌트에서도 사용한다.
-> 하지만 여기에서 export로 내보는것은 이상하기에 별도의 js파일로 분리해서 import해서 사용한다. 
*/

/**
const getStringedDate = (targetDate) => {
  // 날짜 -> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month <= 10) {
    month = `0${month}`;
  }
  if (date <= 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
targetDate라는 데이터 객체를 받아서 YYYY-MM-DD형식으로 자동 변환해서 반환해준다. 
-> Diary컴포넌트에서도 이 함수를 사용하기 때문에 별도의 모듈로 분리해서 사용해준다. 
get-stringed-date.js 라는 별도의 파일을 만들어주고 export를 사용하여 내보내준다.
 */

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어떠하셨나요."
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};
/** 
만약 값이 제대로 안들어왔다면 retuen문 안에 있는 value값들을 확인해주면 된다.
-> value값이 설정이 안되어 있다면 input state 값을 넣어줬다고 해도 반영이 안될수 도 있다. 
*/

export default Editor;
