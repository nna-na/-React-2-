import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
  // useParams 훅을 사용하여 URL 매개변수에서 id 값을 가져옴
  const { id } = useParams();

  // 선택된 옵션을 관리하기 위한 상태(selected)와 상태 업데이트 함수(setSelected) 선언
  const [selected, setSelected] = useState("");

  // 상품 데이터가 없는 경우 에러 메시지 반환
  if (!products) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품 {id}
          </div>

          {products
            // products 배열에서 filter 함수를 사용하여 product의 id가 id와 일치하는 상품 필터링
            // (URL 매개변수로 받은 id 값과 일치하는 상품만 남게 됨)
            .filter((product) => product.id == id)

            // map 함수를 사용하여 남은 상품에 대해 반복문을 실행
            .map((product) => {
              return (
                <div key={product.id}>
                  <h3>가격: {product.price}</h3>
                  <h3>좋아요: {product.likes}</h3>
                  <h3>구매옵션</h3>

                  {/* select 요소 생성. value 속성에는 선택된 옵션을 나타내는 selected 상태 값이 들어감. */}
                  {/* onChange 이벤트 핸들러를 통해 selected 값을 업데이트 함 */}
                  <select
                    value={selected}
                    style={{
                      width: "100px",
                    }}
                    onChange={(e) => {
                      setSelected(e.target.value);
                    }}
                  >
                    {/* product의 option 배열을 map 함수를 사용하여 반복문 실행 */}
                    {/* 각 옵션에 대해 아래의 코드 블록을 실행하여 <option> 요소를 생성 */}
                    {product.option.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <p>구매옵션: {selected}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
