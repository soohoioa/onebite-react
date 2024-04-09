import './App.css'

import Register from './components/Register';
import HookExam from './components/HookExam';

function App() { 
  
  return (
    <>
      <HookExam />
    </>  
  );
}

export default App

/**
// 	State - 상태 관리하기

function App() { 
  const [count, setCount] = useState(0);
  //console.log(state);
  //const [light, setLight] = useState("OFF");
  let light = "OFF";  // 1.

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button 
          onClick= {() => {
          //setLight(light === 'ON' ? 'OFF' : 'ON');
          light = light === 'ON' ? 'OFF' : 'ON';
          // 2. light 라는 변수의 값은 버튼이 클릭될때마다 변경될 수는 있다. -> 하지만 변수의 값이 바뀐다고 컴포넌트가 리렌더링 되지는 않는다.
          // 버튼을 클릭해도 아무런 반응이 없다. -> 왜냐하면 리액트 컴포넌트는 일반적인 변수가 아닌 state의 값이 변화했을때만 리렌더링 되기 때문이다.
          // 
          }}
        >
          {light === 'ON' ? '끄기' : '켜기'}
        </button>
      </div>

      <div>
        <h1>{count}</h1>
        <button 
          onClick={() => {
          setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>  
  );
}

export default App

 */