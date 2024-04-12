import "./App.css";
import {
  useRef,
  useState,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";
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

//export const TodoContext = createContext();
/**
보통 context는 컴포넌트 외부에 선언한다.
-> App안에 선언되었을 경우 문제가 발생하지는 않지만 앱 컴포넌트가 리렌더링 될때마다 계속해서 새로운 context를 생성한다. 
-> context는 데이터를 하위에 있는 컴포넌트들에게 공급만 해주면 된다. 그렇게 때문에 굳이 앱 컴포넌트가 리렌더링 될때마다 다시 생성될 필요는없다. 
-> 정말 특수한 상황이 아니라면 context 생성은 컴포넌트 외부에 선언해준다. 
 */

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);
  /**
  1. useMemo를 사용한 이유
  이전에 { onCreate, onUpdate, onDelete }이 객체들을 TodoDispatchContext.Provider의 value로 공급을 해줬다. 
  그런데 컴포넌트가 리렌더링 되면 함수가 다시 생성이 된다. -> 함수 안에서 만들고 있는 객체, 변수, 함수들 모두 다시 다 생성이 된다. 
  그렇기 때문에 valueProps로 이런 { onCreate, onUpdate, onDelete }객체를 생성해서 넣어주면 컴포넌트가 리렌더링 될때마다 이 객체들이 다시 생성이 된다. 
  하지만 우리가 원하는 것은 TodoDispatchContext로 변하지 않는 값들만 공급하는 context이다. 
  그래서 이런 { onCreate, onUpdate, onDelete }객체들을 useMemo로 다시는 생성하지 않도록 감싸줬다. 
   */

  return (
    <div className="App">
      <Header />

      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
