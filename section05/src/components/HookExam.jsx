import { useState } from "react";
import useInput from "./../hooks/useInput"; // 4-1. import로 불러오면 깔끔하게 정리 할 수 있다. 

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부(조건문 & 반복문)로 호출 될수는 없다.
//3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

//1. const state = useState(); // Invalid hook call. 오류 발생

/**
function useInput() {

  const [input, setInput] = useState("");
  // 3-5. useState를 자바스크립스 함수에서 호출하면 오류가 발생해서 Custom Hook으로 만들어줘야 하는데 생각보다 쉽다.
  // 그냥 getInput -> useInput로 변경해주면 된다.
  // 함수 이름앞에 use를 붙여주면 리액트는 내부적으로 use라는 접두사를 사용하는 함수를 Custom Hook이라 판단하게 되어 다른 리액트 훅을 내부에서 호출한다 하더라도 오류를 발생시키지 않는다.
  const onChange= (e) => {
    setInput(e.target.value);
  }; // 3-2. 함수 getInput()을 만들어 반복적으로 작성될 수 있는 코드들을 붙여준다

  return [input, onChange]; // 3-3. return으로 input, onChange함수만 배열로 묶어서 반환해준다. 

}
*/

// 4. useInput과 같은 Custom Hook은 별도의 파일로 묶어서 관리하는게 일반적이다.

const HookExam = () => {

  const [input, onChange] = useInput(); // 3-4. getInput()함수를 호출해서 배열의 구조분해 할당으로 input, onChange함수를 getInput()으로부터 받아오도록 만들어준다. 
  
  // const [input, setInput] = useState("");
  // const onChange= (e) => {
  //   setInput(e.target.value);
  // }; // 3-1. 한두개면 상관이 없지만 만약 훅이 여러개로 늘어난다면 중복코드도 많아지고 가독성이 떨어지기 때문에 이 부분을 빼서 별도의 함수로 만들면 더 깔끔해진다.

  //2. if ( const state = useState(); ) for() {const state = useState();} 처럼 조건문이나 반복문에서의 호출은 불가능하다
  // 조건문이나 반복문 내부에서 hook을 호출하면 서로 다른 hook들의 호출 순서가 엉망이 되어버린다. -> 내부적 오류 발생
  const state = useState();
  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  )
};

export default HookExam;