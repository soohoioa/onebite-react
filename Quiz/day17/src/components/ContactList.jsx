import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onDelete }) {
  const getFilterdData = () => {
    return contacts.filter((contact) => contact.content);
  };

  const filteredContacts = getFilterdData();

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {filteredContacts.map((contact) => (
        <ContactItem
          className="ContactItem"
          key={contact.id}
          {...contact}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
