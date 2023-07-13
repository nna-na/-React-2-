import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products({ products }) {
  // useSearchParams 훅을 사용하여 쿼리 매개변수(searchParams)와 setSearchParams 함수를 가져옴
  const [searchParams, setSearchParams] = useSearchParams();

  // 현재 sort 쿼리 매개변수의 값을 출력
  console.log({ searchParams: searchParams.get("sort") });

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            // "sort" 쿼리 매개변수를 "price"로 설정하여 클릭 시 가격순으로 정렬
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순정렬
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {products.map((product) => {
            return (
              // 상품을 표시하는 링크를 생성 각 상품은 "/products/:id" 경로로 연결됨
              <Link to={`/products/${product.id}`} key={product.id}>
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <h3>{product.name}</h3>
                  <h3>{product.price}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
