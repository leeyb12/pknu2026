function Ex01() {

  /* Create */
  const data = [
    { id: 1, name: "홍길동", comment: "아버지를 부르지 못하고" },
    { id: 2, name: "임꺽정", comment: "바람은 산을 넘어가고" },
    { id: 3, name: "장길산", comment: "달빛은 강 위에 머물고" },
    { id: 4, name: "김삿갓", comment: "웃음 속에 눈물이 스며들고" },
    { id: 5, name: "허균", comment: "세상은 여전히 말을 아끼고" }
  ];

  /* Load 기능 */
  const LoadData = () => {
    // 1. 로컬 스토리지에 데이터 저장
    const jdata = JSON.stringify(data);
    localStorage.setItem('test1', jdata);

    // 2. 로컬 스토리지에서 데이터 읽기
    const readData = localStorage.getItem("test1");
    if (readData) {
      odata = JSON.parse(readData); // 상태 업데이트 -> 화면 출력
    }
  };

  /* Clear 기능 */
  const ClearData = () => {
    localStorage.removeItem("test1"); // 로컬 스토리지 삭제
    odata([]); // 화면 비우기
  };

  return (
    <>
      <h1>Ex01. LocalStorage 연습</h1>
      <h2>데이터 쓰고 / 읽어오기</h2>

      {/* map을 사용하여 데이터의 모든 내용을 보여줍니다. */}
      {odata.map((item) => (
        <div key={item.id}>
          <hr />
          <h2>{item.id}</h2>
          <h2>{item.name}</h2>
          <h2>{item.comment}</h2>
        </div>
      ))}

      {/* 이벤트 이름은 onClick (대문자) 이어야 합니다. */}
      <button onClick={LoadData}>Load</button>
      <button onClick={ClearData}>Clear</button>
    </>
  );
}

export default Ex01;