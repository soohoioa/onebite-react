// JSX 주의 사항
/**
 * 
return (
  <main>
    <h1>main</h1>
    <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    {10}
    {number}
    {[1, 2, 3]}
    {true}
    {undefined}
    {null}
  </main>
);

 * 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
 * -> 자바스크립트 표현식 : 한 줄의 코드가 특정한 값으로 평가 될 수 있는 코드를 말함
 * -> 조건문, 반복문은 한줄로 값을 평가할 수 없기 때문에 자바스크립트 표현식이라 할 수 없음 -> 그래서 오류가 발생함
 * 
 * 2. 숫자, 문자열, 배열 값만 렌더링 된다.
 * true, undefined, null 등 {} 안에 사용했을 때 오류를 발생시키지 않지만 렌더링 되지도 않음
 * 
 * 3. 모든 태그는 닫혀있어야 한다.
 * html에서는 없어도 오류가 발생하지 않지만 jsx에서는 오류가 발생하므로 반드시 닫힌태그, 셀프클로징을 붙여줘야 한다.
 * 
 * 4. 최상위 태그는 반드시 하나여야만 한다.
 * 아래 코드 return <main> 처럼 최상위 코드는 하나여야만 한다. 
 * 만약 <div>와 <main>을 같이 사용하면 오류가 발생한다. 
 * 만약 최상위 태그로 감쌀 만한 마땅한 태그가 없다면 <> </> 이런식으로 빈태그로만 묶어줘도 된다. 
 * 흩뿌려진것을 원한다면 <> 빈태그로, 묶어서 뿌리고싶다면 <main></main> 이런식으로 표현한다. 
 */
import "./Main.css";

const Main = () => { // App 컴포넌트의 자식 컴포넌트
  const user = {
    name: "몽블랑",
    isLogin: true
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>
    // class가 자바스크립트 예약어라 className으로 작성함 
/**
return <div style={{
  backgroundColor: "red", // - 같은 기호를 사용하면 안되고 - 없이 연결되는 단어의 첫 글자를 대문자로 작성한다. 
  borderBottom: "5px solid blue"
  // 하지만 return문 안에 작성해주면 복잡해지므로 별도의 CSS파일을 만들어서 스타일링을 적용하는 방법도 있다. 
}}>로그아웃</div>
 */
  } else {
    return <div>로그인</div>
  }

  // return <>
  //   {user.isLogin ? <div>로그아웃</div> : <div>로그인</div> }
  // </>

  // 두 가지 방식은 차리가 별로 없고 편한 방식으로 사용하면 된다. 
};

export default Main;