import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([
    { id: nanoid(), contents: "리액트 공부하기", likes: 0 },
    { id: nanoid(), contents: "아침 운동하기", likes: 0 },
  ]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div>
        {darkMode ? <div style={{ backgroundColor: "black", color: "white" }}>다크모드!</div> : <div>화이트모드!</div>}
        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
      </div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option>선택하세요</option>
        <option>검은색바지</option>
        <option>파란색바지</option>
        <option>빨간색바지</option>
      </select>
      <div>{selectedOption}</div>
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
            const copy = [...todoList, { id: nanoid(), contents: inputValue, likes: 0 }];
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
            <button
              onClick={() => {
                const updatedTodoList = todoList.map((item, index) => {
                  if (index === todoIndex) {
                    return { ...item, likes: item.likes + 1 };
                  }
                  return item;
                });
                setTodoList(updatedTodoList);
              }}
            >
              좋아요 {todo.likes}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
