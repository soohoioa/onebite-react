import { useState } from "react";
import "./ContactEditor.css";

// eslint-disable-next-line react/prop-types
export default function ContactEditor({ onCreate }) {
  const [state, setState] = useState({
    name: "",
    content: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (state.name === "" || state.content === "") {
      alert("이름과 연락처를 입력해주세요");
      return;
    }

    onCreate(state.name, state.content);

    setState({
      name: "",
      content: "",
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          name="name"
          value={state.name}
          onChange={onChange}
          onKeyDown={onKeydown}
          className="name"
          placeholder="이름 ..."
        />
        <input
          name="content"
          value={state.content}
          onChange={onChange}
          onKeyDown={onKeydown}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
