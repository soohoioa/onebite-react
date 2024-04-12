import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  /**
  const getAnalyzedData = () => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length; // 현재 등록된 전체 Todo 아이템 개수
    const doneCount = todos.filter((todo) => todo.isDone).length; // 전체 Todo중 완료된 Todo 개수
    const notDoneCount = totalCount - doneCount; // 완료되지 않은 Todo 개수

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
    // filter 배열 메소드를 사용하고 있어 todos에 보관된 데이터의 개수가 증가할수록 더 오래 걸리는 함수가 된다.
    // -> filter메소드는 배열 내 전체 요소들을 한번 씩 다 순회하기 때문이다.
    // 그래서 useMemo가 필요하다. 
  };
  const { totalCount, doneCount, notDoneCount } = getAnalyzedData();
   */

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length; // 현재 등록된 전체 Todo 아이템 개수
    const doneCount = todos.filter((todo) => todo.isDone).length; // 전체 Todo중 완료된 Todo 개수
    const notDoneCount = totalCount - doneCount; // 완료되지 않은 Todo 개수

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 의존성배열 : deps
  // useMemo는 콜백함수가 반환하는 값을 그대로 반환해준다. -> 이 연산은 딱 한번만 수행되도록 바뀌었다.

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
