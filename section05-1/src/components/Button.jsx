/**
1.
const Button = (props) => {
  console.log(props);
  return (
    <button style={{ color : props.color }}>
    {props.text} - {props.color.toUpperCase()}
    </button>
  )
};

Button.defaultProps = { // Props의 기본값 설정 
  color: "black",
};

 */

const Button = ({ text, color, children }) => {
  return (
    <button style={{ color : color }}>
    {text} - {color.toUpperCase()}
    {children}
    </button>
  )
};

Button.defaultProps = { // Props의 기본값 설정 
  color: "black",
};

// Props는 부모 컨포넌트에서 자식 컨포넌트로만 전달 할 수 있다. 
// 자식 컨포넌트에서 반대로 부모 컨포넌트에 값을 전달하는 것은 리액트에서 불가능하다. 

export default Button;