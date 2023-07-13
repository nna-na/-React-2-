import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState } from "react";

function App() {
  // 상태 변수를 생성하고, 초기값으로 배열 형태의 상품 데이터를 설정
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "멋진 바지",
      price: 20000,
      option: [28, 30, 32],
      likes: 100,
    },
    {
      id: 2,
      name: "멋진 셔츠",
      price: 10000,
      option: ["small", "medium", "large"],
      likes: 200,
    },
    {
      id: 3,
      name: "멋진 신발",
      price: 30000,
      option: [230, 240, 250, 260, 270],
      likes: 300,
    },
  ]);
  return (
    // React Router의 Routes 및 Route 컴포넌트를 사용한 라우터 구성
    // Main, Products, Product 컴포넌트에 products 상태를 전달
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:id" element={<Product products={products} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="*"
          element={
            <>
              <div>없는 페이지입니다.</div>
              <Link to="/">홈으로 이동</Link>
            </>
          }
        />{" "}
      </Route>
    </Routes>
  );
}

export default App;
