import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

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

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {/**
        {todos.map((todo) => {
          return <div>{todo.content}</div>;
        })}// 맵 메서드를 활용하여 배열에 담긴 데이터를 리스트 형태로 렌더링 할수있다. 
        // 추가로 콜백함수에서 일반적인 html(<div>)태그뿐만 아니라 리액트 컴포넌트(<TodoItem />)도 렌더링하도록 설정해 줄 수 있다.     
         */}
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
