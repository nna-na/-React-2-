import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main({ products }) {
  // useNavigate 훅을 사용하여 페이지 이동 기능을 제공하는 navigate 변수를 선언
  const navigate = useNavigate();

  return (
    <>
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>

        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              // 클릭 시 경고 메시지를 띄우고 "/products" 경로로 이동
              alert("정말 이동하시겠습니까?");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>

          {/* 더보기 링크 */}
          <Link to="/products">더보기</Link>

          {/* 상품 목록 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  {/* 상품명과 가격 표시 */}
                  <h3>{product.name}</h3>
                  <h3>{product.price}</h3>
                </div>
              );
            })}
          </div>
        </section>
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
