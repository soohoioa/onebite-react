import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter> // 브라우저의 현재 주소를 저장하고 감지하는 역할
  // BrowserRouter로 App을 감싸주면 리액트 앱의 모든 컴포넌트들이 현재 브라우저의 주소를 불러와 사용할 수 있고, 주소의 변화를 감지 할 수 있다.
);
