import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전나쁨" },
];

// new Date() 객체를 문자열로 변환하는 함수
const getStringedDate = (targetDate) => {
  // 날짜 -> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // if조건문으로 month의 값이 10 이하라면 앞에 0을 붙여준다.
  if (month <= 10) {
    month = `0${month}`;
  }
  if (date <= 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  // 하나의 state에 여러개의 값을 저장하고 관리하는 방법은 state를 객체로 만들어 준다.

  const nav = useNavigate();

  const onChangeInput = (e) => {
    //console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
    //console.log(e.target.value); // 입력된 값이 무엇인지?

    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input, // 기존의 state값 유지
      [name]: value, // 수정할 프로퍼티의 키 값
      /**
      [e.target.name]: e.target.value, : 이런식으로 전달하면 앞에서 new Date() 객체를 문자열로 변환하는 함수를 사용하였기에 
      Date값이 아닌 문자열이 저장이 된다. 이때에는 별도로 Date객체를 별도로 변경해줘야 한다. 
      1. name, value 라는 변수를 선언해서 값을 넣어주고
      2. if문을 사용하여 현재의 name값이 "createdDate"라면 Date값을 변환해서 value값을 설정한다. 
      3. [name]: value, 로 설정한다. 
      -> 오늘의 날짜가 Date()객체로싸 state에 보관된다. 
       */
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
          {/* <EmotionItem emotionId={1} emotionName={"완전 좋음"} /> 처럼
              props의 이름이 변경되거나 추가, 수정될 경우 복잡해지기 때문에 
              컴포넌트들을 하나씩 랜더링 시켜주기 보다는 컴포넌트 외부에 emotionList라는 변수를 만들어 변수에 배열로 데이터를 저장해주고
              실제로 return문에서는 map메소드를 이용하여 emotionList로 랜더링시켜주는것이 좋다. */}

          {emotionList.map((item) => (
            <EmotionItem
              // 클릭시 입력이 발생한것처럼 이벤트를 직접 발생시켜준다. -> onChangeInput()함수를 호출시켜 이벤트를 강제로 발생하게 한다.
              onClick={() =>
                onChangeInput({
                  // 함수의 인수로는 이벤트 객체를 직접 만들어서 전달해줘야 한다. -> EmotionItem는 컴포넌트이기 때문에 이벤트 객체가 자동전달이 안된다. -> 별도의 이벤트 객체가 필요하다.
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
          {/* 만약 코드상에 새로운 props가 추가되거나 이름이 수정된다 하더라도 
              map메서드 안쪽만 수정해주면 되기 때문에 기능을 추가하기에도 편한 방식이다.  */}
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

export default Editor;
