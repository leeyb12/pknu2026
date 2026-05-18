import { useState } from "react";
import list from "./ex06_sample";
import styles from "./Ex07.module.css";

// 객체 초기화 (false 로 초기화)
const obj = {};
list.forEach((v) => {
  obj[v] = false;
});

function Ex07() {
  const [info, setInfo] = useState(obj);

  const handleInfo = (e) => {
    const { value, checked } = e.target;
    setInfo((data) => ({ ...data, [value]: checked }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ex07 페이지 입니다.</h1>
      <h2 className={styles.subtitle}>React 체크박스 예제</h2>

      <h3 className={styles.state}>{JSON.stringify(info)}</h3>

      {list.map((v, i) => (
        <div key={i} className={styles.item}>
          <input
            type="checkbox"
            id={`checkbox-${i}`}
            value={v}
            checked={info[v]}
            onChange={handleInfo}
            className={styles.checkbox}
          />
          <label htmlFor={`checkbox-${i}`} className={styles.label}>
            {v.toUpperCase()}
          </label>
        </div>
      ))}

      <div className={styles.note}>
        <strong>참고:</strong> 각 항목의 상태를 독립적으로 관리하며, CSS 모듈로
        스타일을 적용하여 깔끔한 인터페이스를 구현했습니다.
      </div>
    </div>
  );
}

export default Ex07;
