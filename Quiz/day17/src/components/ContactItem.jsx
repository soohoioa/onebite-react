import "./ContactItem.css";
import { memo, useContext } from "react";
import { DispatchContext } from "../App";

function ContactItem({ id, name, content }) {
  const { onDelete } = useContext(DispatchContext);

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{content}</div>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
