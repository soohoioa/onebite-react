import './App.css';
import Header from './components/Header'; // 확장자 생략 가능
import Main from "./components/Main";
import Footer from './components/Footer';
import Button from './components/Button';

function App() { // Header 컴포넌트의 부모 컴포넌트

  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  }

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App;

/**
 * 리액트의 모든 컴포넌트들은 화면에 렌더링되기 위해 App 컴포넌트의 자식 컴포넌트로서 존재해야 한다.
 * App 컴포넌트를 최상위 조상으로 갖는 계층 구조를 가진다.
 * 모든 컴포넌트들의 조상(뿌리)역할을 한다 라고 해서 Root 컴포넌트라 부른다.
 */