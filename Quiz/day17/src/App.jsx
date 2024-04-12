import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer, useRef, useCallback } from "react";

const mockData = [
  {
    id: 0,
    name: "이정환",
    content: "king1997@gmail.com",
  },
  {
    id: 1,
    name: "한입스튜디오",
    content: "onbite.fe@gmail.com",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  // 최적화 useCallback
  const onCreate = useCallback((name, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        content: content,
      },
    });
  }, []);

  // 최적화 useCallback
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
