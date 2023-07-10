import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [likeBtn, setLikeBtn] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([
    { id: nanoid(), contents: "리액트 공부하기" },
    { id: nanoid(), contents: "아침 운동하기" },
  ]);

  return (
    <>
      <div>
        {darkMode ? <div style={{ backgroundColor: "black", color: "white" }}>다크모드!</div> : <div>화이트모드!</div>}
        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
      </div>
      <select>
        <option>선택하세요</option>
        <option>검은색바지</option>
        <option>파란색바지</option>
        <option>빨간색바지</option>
      </select>
      <br />
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputValue === "") {
            alert("내용을 입력해주세요.");
          } else {
            const copy = [...todoList, { id: nanoid, contents: inputValue }];
            setTodoList(copy);
            setInputValue("");
          }
        }}
      >
        입력
      </button>
      {todoList.map((todo, todoIndex) => {
        return (
          <div key={todo.id}>
            <span>{todo.contents}</span>
            <button
              onClick={() => {
                const newArray = todoList.filter((_, index) => {
                  return index !== todoIndex;
                });
                setTodoList(newArray);
              }}
            >
              삭제
            </button>
            <span> {likeBtn}</span>
            <button
              onClick={() => {
                setLikeBtn(likeBtn + 1);
              }}
            >
              좋아요
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
