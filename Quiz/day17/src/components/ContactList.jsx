import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { DispatchContext, StateContext } from "../App";

export default function ContactList() {
  const { onDelete } = useContext(DispatchContext);
  const contacts = useContext(StateContext);

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
