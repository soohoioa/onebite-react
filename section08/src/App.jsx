import "./App.css";
import { useRef, useState } from "react";
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
  /**
  mockData변수는 앱 컴포넌트가 리렌더링 될때마다 다시 생성될 필요가 없고,
  애초에 상수이기 때문에 값을 바꿀수도 없어 컴포넌트 외부에 선언해도 전혀 문제되지 않는다. 
   */
]; // 다시 생성하지 않도록 외부에 선언.

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // todos.push(newTodo); 사용하면 안됨.
    /**
    todos와 같은 state값들은 반드시 상태변화 함수를 호출해서만 수정할 수 있디. 
    -> 변경된 state값을 리액트가 감지할 수 있고, 컴포넌트를 정상적으로 리렌더링 시켜준다. 
    push() 메서드 같은걸 활용해서 state값을 직접 변경하면 안된다. 
    -> 대신에 무조건 제공된 상태변화 함수인 setTodos를 호출하고, 인수로 새로운 값을 넣어줘야 한다. 
     */

    setTodos([newTodo, ...todos]);
    // 스프레드 연산자로 기존의 todos 배열에 들어있던 값들을 펼쳐주고,
    // 배열앞에 ,를 찍고 newTodo라고 해서 추가하고자 하는 데이터를 넣어준다.
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에 targetId와 일치하는 id를 갖는 TodoItem의 isDone변경

    // 인수 : todos배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
    setTodos(
      todos.map(
        (todo) =>
          todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo // 이런식으로 간결하게 표현이 가능하다.
        /** 
        { if (todo.id === targetId) {
          // 순회중인 todo.id가 수정 대상의인 targetId와 일치한다면 todo 데이터값을 변경
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo; }
        콜백 함수를 화살표 함수의 문법을 사용하면 간결하게 표현이 가능하다. 
        */
      )
    );
  };

  const onDelete = (targetId) => {
    // 인수 : todos배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(
      todos.filter((todo) => todo.id !== targetId) // 삭제 대상이 아닌 요소들만 필터링하도록 만들어주면 된다.
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
