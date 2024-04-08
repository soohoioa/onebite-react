import { useState } from "react";
// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

const Register = () => {

  const [input, setInput] = useState({ // 정리 : 이렇게 비슷한 state가 있을때는 하나의 객체 값으로 묶어서 하나의 state로 통합해서 관리하면 관리가 편하다. 
    name: "", // 이름
    birth: "", // 생일
    country: "", // 국적
    bio: "" // 자기소개
  });

  const onChange = (e) => { // 통합 이벤트 핸들러
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    })
  } // 정리 : 여러개의 비슷하게 생긴 이벤트 핸들러들은 통합 이벤트 핸들러로 묶어줄 수 있다. 

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>

      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange} >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  )
  
};

export default Register;

/**
placeholder : 가이드 문구 같은 것

1. 첫번째 수업, 지금 작성한 코드들은 중복코드도 많아 좀 더 가독성 좋게 만들어 주겠다. 

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
      {bio}
    </div>
  )
  
};

export default Register;

 */

/**
2. 두번째 수업, 이벤트 객체들을 한곳으로 모아 관리

const Register = () => {

  const [input, setInput] = useState({
    name: "", // 이름
    birth: "", // 생일
    country: "", // 국적
    bio: "" // 자기소개
  });

  // console.log(input);

  const onChangeName = (e) => {
    setInput({
      ...input, // 스프레드 연산자를 이용하여 관련 없는 값들은 그대로 유지되도록 만들어주고 다음에 변경하고자 하는
      name: e.target.value // 프로퍼티의 값만 이렇게 바꿔주도록 코드를 만들어 준다. 
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input, 
      birth: e.target.value 
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input, 
      country: e.target.value 
    });
  };

  const onChabgeBio = (e) => {
    setInput({
      ...input, 
      bio: e.target.value 
    });
  };

  return (
    <div>
      <div>
        <input value={input.name} onChange={onChangeName} placeholder={"이름"} />
      </div>

      <div>
        <input value={input.birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={input.country} onChange={onChangeCountry} >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} onChange={onChabgeBio} />
      </div>
    </div>
  )
  
};
 */

/**
3. 세번째 수업, 이벤트 함수들도 한곳으로 모아서 관리


 */