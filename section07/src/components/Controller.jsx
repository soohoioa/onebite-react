const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button
        onClick={() => {
          //화살표 함수를 이벤트 핸들러로 설정하고 해당 이벤트 핸들러에서 onClickButton함수를 호출해서 인수를 원하는 값으로 넘기도록 설정해줬다
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
