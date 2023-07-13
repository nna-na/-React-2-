import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot를 사용하여 root 요소를 생성
const root = ReactDOM.createRoot(document.getElementById("root"));

// React.StrictMode를 사용하여 엄격 모드로 앱 실행
root.render(
  <React.StrictMode>
    {/* BrowserRouter를 사용하여 브라우저의 주소와 컴포넌트를 연결 */}
    <BrowserRouter>
      {/* App 컴포넌트를 BrowserRouter의 자식 컴포넌트로 렌더링 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
