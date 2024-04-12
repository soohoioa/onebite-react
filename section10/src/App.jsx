import "./App.css";
import { useRef, useState, useReducer, useCallback } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "JavaScript 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Java 공부하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // const func = useCallback(()=>{}, [])
  // 첫번째 인수로 전달한 콜백함수를 그대로 생성해서 반환해준다.
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

/**
1. 기능 먼저 구현하고 마지막에 최적화를 실행한다. 
최적화를 위해 useCallback같은 메서드들을 적용해 놓고 나면 새로운 기능을 덧붙이거나 수정해야 될때 최적화가 풀리거나 고장날 수 있다. 
되도록이면 기능구현을 먼저 하고, 마지막에 최적화하는것이 좋다. 

2. 모든 것들에 최적화가 아닌 꼭 최적화가 필요할것 같은 연산들이나 함수들, 컴포넌트에만 최적화를 적용하는게 좋다. 
TodoItem컴포넌트처럼 유저의 행동에 따라서 개수가 굉장히 많아질 수 있는 컴포넌트, 
또는 함수(onChange 등)들을 많이 가지고 있어 코드가 무거운 컴포넌트들에 한해서만 최적화를 수행하는것이 좋다. 
 */
