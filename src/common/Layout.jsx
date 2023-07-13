import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link to="/">
          <div>로고</div>
        </Link>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link to="/signin">
            <div>로그인</div>
          </Link>
          <Link to="/signup">
            <div>회원가입</div>
          </Link>
        </div>
      </header>
      <Outlet />

      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}
