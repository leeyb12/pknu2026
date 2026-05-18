import { useState, useEffect } from "react";
import "./Ex10.css"; // CSS 파일 연결

function Ex10() {
  const [inData, setIndata] = useState("");
  const [arr, setArr] = useState(() => {
    // [도전 4] LocalStorage에서 데이터 불러오기
    const saved = localStorage.getItem("my-todos");
    return saved ? JSON.parse(saved) : [];
  });

  // [도전 4] 데이터가 바뀔 때마다 LocalStorage에 저장
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(arr));
  }, [arr]);

  const handleInput = (e) => setIndata(e.target.value);

  const handleAdd = () => {
    if (inData.trim() === "") return;
    // 상태를 객체 구조로 변경하여 체크 여부 저장
    setArr([...arr, { id: Date.now(), text: inData, isDone: false }]);
    setIndata("");
  };

  // [도전 1] 엔터키로 입력 가능하게 만들기
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const handleDel = () => {
    if (window.confirm("정말 모든 목록을 삭제할까요?")) setArr([]);
  };

  // [도전 3] 체크박스 상태 토글
  const handleToggle = (id) => {
    setArr(arr.map(item => 
      item.id === id ? { ...item, isDone: !item.isDone } : item
    ));
  };

  // 개별 삭제 기능 추가
  const removeTodo = (id) => {
    setArr(arr.filter(item => item.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">10. ToDo List 만들기</h1>
      
      <div className="input-wrapper">
        <input 
          type="text" 
          id="inin" 
          placeholder="할 일을 입력하세요"
          onChange={handleInput} 
          onKeyDown={handleKeyDown}
          value={inData} 
        />
        <button className="btn-add" onClick={handleAdd}>추가</button>
      </div>

      <div className="info-bar">
        <span>현재 <strong>{arr.length}</strong>개의 할 일</span>
        <button className="btn-del-all" onClick={handleDel}>모두 삭제</button>
      </div>

      <div className="todo-list">
        {arr.map((v, i) => (
          <div key={v.id} className={`todo-item ${v.isDone ? "done" : ""}`}>
            <div className="todo-content">
              <input 
                type="checkbox" 
                checked={v.isDone} 
                onChange={() => handleToggle(v.id)} 
              />
              <span className="todo-text">
                <span className="index">{i + 1}.</span> {v.text}
              </span>
            </div>
            <button className="btn-remove" onClick={() => removeTodo(v.id)}>×</button>
          </div>
        ))}
        {arr.length === 0 && <p className="empty-msg">목록이 비어 있습니다. ✨</p>}
      </div>
    </div>
  );
}

export default Ex10;