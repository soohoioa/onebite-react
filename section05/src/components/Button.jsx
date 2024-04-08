const Button = ({ text, color, children }) => {
//이벤트 처리
const onClickButton = (e) => { // 1. 객체를 e라는 매개변수로 선언
  console.log(e); // 2. 콘솔에 출력
  console.log(text);
};

  return (
    <button 
      onClick = {onClickButton}
      //onMouseEnter={onClickButton} 버튼에 마우스 가져가면 실행되는 이벤트 함수.
      style={{color: color}}
    >
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;