import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  /**
  2. useMemo를 사용한 이유 -> List 컴포넌트에서는 왜 구조분해 할당을 하지 않냐
  이전에 구조분해할당으로 쓰고 있는것을 보면 TodoItem 컴포넌트 DispatchContext로 부터 값을 불러올때는 구조분해할당을 사용한다. 
  하지만 List 컴포넌트에서 안 쓰는 이유는 App 컴포넌트에서 DispatchContext는 객체를 통해서 여러개의 값을 공급하고 있다. 
  onCreate, onUpdate, onDelete 들 처럼 개별로 꺼내 쓸 수 있게 공급이 되었기 때문에 구조분해할당으로 접근을 하는것이고,
  반대로 TodoStateContext.Provider 경우에는 valueProps로 todos가 바로 공급되었다. -> 변수에다가 객체를 담은게 아닌 배열을 담았다고 생각하면 된다. 
  그래서 List 컴포넌트에서는 구조분해할당이 아닌 valueProps로 전달된 값을 그대로 todos라는 변수로 꺼내서 사용할 수 있는거다. 
   */
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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 의존성배열 : deps

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
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
