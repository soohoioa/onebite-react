import "./Main.css";

const Main = () => {
  const user = {
    name: "몽블랑",
    isLogin: true,
  };
  
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  } 
  
  };
  
  export default Main;
  
  /**
삼항연산자가 아닌 더 깔끔하게 만들고 싶다면?

  return (
    <>
      { user.isLogin ? <div>로그아웃</div> : <div>로그인</div> }
    </>
  );

  if (user.isLogin) {
    return <div>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  } // 이런 식으로 사용이 가능하다. 


// DOM 요소 스타일 적용 방법
// 1. 요소에 직접 스타일 속성 설정
// backgroundColor처럼 사용해야 한다. 만약 CSS사용하듯이 background-Color처럼 사용할경우 오류가 발생한다.
// 때문에 - 없이 연결되는 단어의 첫 글자를 대문자로 사용하면 된다.
if (user.isLogin) {
  return <div className="logout"
    // backgroundColor: "red",
    // borderBottom: "5px solid blue",
    // 하지만 return문 안에 직접적으로 스타일링 코드 작성시 많아질수록 코드 가독성이 떨어진다.
    // 별도의 CSS파일을 만들어 적용하는 방법도 있다.
  >로그아웃</div>;
} else {
  return <div>로그인</div>;
} 


};

export default Main;

자바스크립트의 값을 html로 렌더링 하고 싶다면 {} 안에 적어주면 된다. 
{} 안에는 숫자, 문자열, 삼항연산자 등 값으로써 평가될 수 있는 식이라면 무엇이든디 다 넣어줄 수 있다. 

JSX 주의 사항
1. 중괄호 {} 내부에는 자바스크립트 표현식만 넣을 수 있다. 
{number % 2 === 0 ? "짝수" : "홀수"} , {10} , {number} 등 한줄의 코드가 특정한 값으로 평가될 수 있는 식들을 말한다.
{if(){}} 조건문 , {for(){}} 반복문을 사용하면 오류가 발생한다. -> 한줄로싸 값으로 평가될 수 없기 때문에 자바스크립트 표현식이라 볼 수 없다.

2. 숫자, 문자열, 배열 값만 정상적으로 렌더링이 된다.
{10} , {number} , {[1, 2, 3]} 등 정상적으로 렌더링 된다. 
{true} , {undefinde} , {null} 값들은 오류를 발생시키지 않지만 화면에 렌더링 되지 않는다. 
객체값도 렌더링 되지 않는다.

3. 모든 태그는 닫혀있어야 한다.
<h1></h1> , < /> 식으로 닫는태그가 있어야 한다.

4. 최상위 태그는 반드시 하나여야만 한다.
<div></div> , <main></main> 처럼 메인 태그가 두개 이상이면 오류가 발생한다. 
만약 최상위 태그로 감쌀만한 태그가 없다면 <></> 빈태그로만 묶어줘도 된다. 
 */