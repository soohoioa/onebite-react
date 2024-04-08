import { useState } from "react";

const Bulb = () => { // 전구가 꺼져있는지 켜져있는지를 이 props의 light라는 이름으로 받아오겠다. 
  const [light, setLight] = useState("OFF");

  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{backgroundColor:"orange"}}>ON</h1>
      ) : (
        <h1 style={{backgroundColor:"gray"}}>OFF</h1> 
      )}

      <button 
        onClick= {() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}
      >
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </div>
  );
}

export default Bulb;