import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data; // action.data의 값이 애초에 localStorage로 부터 방금 불어온 값이다. 그렇기 때문에 localStorage에 한번 더 보관할 필요가 없으므로 바로 return을 한다.
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  // 일기가 삽입, 추가, 삭제가 일어날때마다 localStorage에 diary라는 키 값으로 일기의 현재 데이터를 바로바로 localStorage에 저장해 준다.

  return nextState;
}

export const DirayStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0); // 2. 초기값이 0으로 설정되어 있는데 이렇게 되면 새로운 일기를 추가할때 기존의 일기들과 id가 겹칠 수 있으므로 초기값을 localStorage를 통해서 불러온 일기 데이터들 중에서 가장 높은 id값을 찾아서 +1을 해준다.

  // 1. App컴포넌트가 마운트 될 때 그러니까 화면에 처음으로 나타나고 나서 그때 localStorage을 통해 데이터를 불러와서 data state의 값을 초기값으로 설정해준다.
  useEffect(() => {
    // 1-1. 컴포넌트가 마운트 되었을때 딱 한번만 실행되도록 만들어준다.
    const storedData = localStorage.getItem("diary"); // 1-2. diary를 인수로 전달해서 일단 저장된 일기 데이터를 꺼내오도록 설정해준다.
    if (!storedData) {
      setIsLoading(false);
      return; // 1-3. 만약 storedData의 값이 undefined, null이면 오류가 발생하므로 if문을 통해 useEffect의 콜백함수를 즉시 종료해주도록 return문을 추가해준다.
    }

    const parsedData = JSON.parse(storedData); // 1-4. 문자열로 저장된 일기 데이터 storedData를 배열 형태로 다시 변환해준다.

    // 3. 혹시나 JSON.parse로 불러온 parsedData가 배열 형태가 아닐경우 forEach 메서드를 사용하려고 하면 오류가 발생할 수도 있어 예외처리를 해준다.
    // 3-1. if문을 이용해 현재 parsedData에 담긴 값이 배열이 아닌 경우
    if (!Array.isArray(parsedData)) {
      // 3-2. 배열인지 확인하고 싶을때는 자바스크립트 내장함수인 Array.isArray메서드를 사용해준다.
      setIsLoading(false);
      return; // 3-3. 인수로 전달한 parsedData 값이 현재 배열이라면 true, 아니면 false를 반환하므로 not연산자를 사용하여 조건문이 참일 경우 현재 parsedData는 배열이 아니니까 return문으로 강제 종료 시켜준다.
    }

    // 2-1. parsedData에 저장된 일기 데이터들 중에 가장 숫자가 높은 id값을 찾는다.
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id); // 2-2. Number타입으로 변형시켜주는 이유는 localStorage에 JSON.stringify로 저장했고 JSON.parse로 꺼내온 데이터들은 기본적으로 문자열 형태로 저장이 되기 때문에 item.id도 문자열이기 때문에 숫자형으로 형변환을 시켜준다.
      }
    });

    idRef.current = maxId + 1; // 새로운 일기가 생성이 될 때에도 기존에 저장되어 있던 일기 데이터의 id값과 겹치지 않도록 +1을 해준다.

    // 1-5. parsedData에 저장된 일기 데이터를 data state의 초기값으로 설정해준다.
    dispatch({
      type: "INIT", // init은 초기화를 의미
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  /** 
  -- localStorage 추가
  localStorage.setItem("test", "hello"); // localStorage에 데이터 저장
  // 첫번째 인수 : 저장할 데이터 키 값 (키 값은 무조건 원시타입으로 넣어줘야 한다. )
  // 두번째 인수 : 첫번째 인수로 전달한 키값에 해당하는 value 값 (실제 저장될 값)
  
  localStorage.setItem("person", JSON.stringify({ name: "몽블랑" }));
  // 객체타입의 값을 그대로 localStorage에 넣을경우 값이 제대로 저장되지 않는다.
  // JSON.stringify() 메소드를 사용하여 객체를 문자열로 변환해서 넣어준다. -> JSON.stringify는 단순히 객체를 문자열로 변환시켜주는 역할을 한다.

  -- localStorage 불러오기
  console.log(localStorage.getItem("test")); 
  // 키 값을 넣어주면 키 값에 해당하는 value값을 불러와서 반환해준다.
  
  console.log(JSON.parse(localStorage.getItem("person")));
  // JSON.parse() 메소드는 인수로 전달한 객체 형태의 문자열을 파싱해서 객체로 다시 변환시키는 기능을 가지고 있다.
  // JSON.parse()는 인수로 전달한 값이 undefined, null이면 오류를 발생시킨다.

  -- localStorage 삭제
  localStorage.removeItem("test"); // 인수로 삭제할 데이터의 키 값을 넣어준다.
  // 굳이 코드로 적어서 삭제하고 싶지 않다면 페이지에 있는 데이터를 클랙헤 backspace를 눌러준다.
  */

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다 ...</div>;
  }

  return (
    <>
      <DirayStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DirayStateContext.Provider>
    </>
  );
}

export default App;
