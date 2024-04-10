import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  /** 
  useEffect(() => { // 컴포넌트 내에서 원하는값이 바뀌었을 때만 특정 동작을 callback함수로 실행하도록 만들 수 있다. 
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]); // 첫번쩨 인수로는 콜백함수, 두번째 인수로는 배열을 넣어준다.
  // 의존성 배열 dependency array (deps)
  */

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // 콜백함수 호출, deps 빈 배열 / 최초로 한 번 실행시키고 싶은 코드가 있다면 seEffect()를 호출하고 deps로 빈 배열을 전달하면 된다.

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    } // 컴포넌트의 업데이트 단계에서만 코드를 실행시키고 싶다면 isMount같은 레퍼런스 객체를 하나 생성 후 플래그로써 사용하면 된다.
    console.log("update");
  }); // 콜백함수 호출, deps는 생략

  // 3. 언마운트 : 죽음

  // useEffect를 사용하면 제어할 수 있다.

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>

      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
