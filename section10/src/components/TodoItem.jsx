import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);

// 객체 타입의 값을 props로 받고있는 컴포넌트는 memo메서드만 적용한다고 해서 최적화가 제대로 이루어지지 않는다.
// 1. 앱 컴포넌트에서 함수(onCreate, onUpdate, onDelete)들 자체를 메모이제이션해서 리렌더링 되더라도 다시 생성되지 않게 방지하는 방법 -> useCallback 이라는 훅을 이용해야 한다.

/**
2. memo(TodoItem)안에 콜백함수(() => {})를 추가로 전달해 최적화 기능을 커스터마이징 해주면 된다.
    -> 보통은 콜백함수를 생략하지만 전달하게 되면 memo메서드는 부모 컴포넌트가 리렌더링 될때마다 컴포넌트의 props를 바뀌었는지 자기가 스스로 판단하는게 아닌,
    -> 콜백함수의 매개변수로 과거의props, 현재의props를 전달해줘서 이 함수의 반환값에 따라 props가 비뀌었는지 판단한다.

// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 판단.
  // T -> Props가 바뀌지 않음 -> 리렌더링 O / F -> Props가 바뀜 -> 리렌더링 X

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
 */
