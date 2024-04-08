import { useState } from "react";
// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

const Register = () => {

  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChabgeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>

      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={country} onChange={onChangeCountry} >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChabgeBio} />
      </div>
    </div>
  )
  
};

export default Register;

/**
placeholder : 가이드 문구 같은 것
 */