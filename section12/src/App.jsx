import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-image";

/**
useNavigate : 페이지를 실제로 이동시키는 navigate함수를 반환한다. 
* 

1. "/" : 모든 일기를 조회하는 Home 페이지
2. "/new" : 새로운 일기를 작성하는 New 페이지
3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
리액트에서는 모든 요소가 컴포넌트로 나뉜다 했기 때문에 페이지도 컴포넌트로 이루어진다. 
 */

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button text={"123"} type={"DEFAULT"} onClick={() => {}} />

      <Button text={"123"} type={"POSITIVE"} onClick={() => {}} />

      <Button text={"123"} type={"NEGATIVE"} onClick={() => {}} />
      {/* 
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diray"}>Diray</Link>

        <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/diray">Diray</a> 
        리액트 앱 내부에서 내부 링크를 만들어야 될 경우 <a>태그가 아닌 <Link> 컴포넌트를 사용한다. 
      </div>

      <button onClick={onClickButton}>New 페이지로 이동</button>
      */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diray/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}
/**
1. Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다. 
<Routes> - <div> : 오류 발생
예) <div>를 추가하면 콘솔창에 굉장히 많은 오류가 발생한다. 

2. Routes 컴포넌트 밖에 배치된 요소들은 페이지 라우팅과 관렶 없이, 모든 페이지에 다 동일하게 렌더링 된다. 
<> - <div> - <Routes> : 모두 렌더링
예) Routes 컴포넌트 위에 <> 빈태그로 감싸주고 <div>태그를 추가하면 어떤페이지들 간에 Routes 컴포넌트 밖에 있는 요소는 모두 렌더링 된다. 
-> Routes 컴포넌트 안에있는 요소들만 페이지에 따라서 렌더링이 바뀌는거고, 
   그 외부에는 일반적인 리액트 컴포넌트처럼 모두 렌더링이 진행되기 때문에 페이지 경로와는 관계없이 모두 렌더링이 된다. 
-> 그렇기 때문에 모든 페이지에 공통적으로 사용될 요소가 아니라면 Routes 컴포넌트 외부에 배치하는 것은 적절하지 않다. 
 */

/**
링크 태그가 필요한 경우 <Link> 컴포넌트를 사용하고, 
이벤트 함수 안에서 특정 조건에 따라서 페이지를 이동시켜야 한다면 useNavigate라는 커스텀 훅을 react-router-dom로부터 불어와서
useNavigate()함수로 사용하면 된다. 
 */

export default App;
