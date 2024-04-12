import "./ContactItem.css";

// eslint-disable-next-line react/prop-types
export default function ContactItem({ id, name, content, onDelete }) {
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
