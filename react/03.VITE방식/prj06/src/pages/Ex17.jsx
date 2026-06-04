import { useState } from "react"
import axios from "axios";
import "./Ex17.module.css";

const Ex17 = () => {
    const [sdata, setSdata] = useState({ username: "", password: "" })
    const [mydata, setMydata] = useState("")
    const handleInput = (e) => {
        setSdata(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const sendPost = () => {
        axios.post("/data", sdata).then(result => setMydata(result.data));
    }
    return (
        <div className="ex17-container">
            <h1>17. Axios로 데이터통신</h1>
            <h2>nodejs 위에서 build하여 동작</h2>
            <div className="input-group">
                <div>서버로 보내는 값:</div>
                <label htmlFor="sendMsg">메시지: </label>
                <input type="text" id="sendMsg" name="username" onChange={handleInput}
                    value={sdata.username} /><br />
                <label htmlFor="passWord">패스워드: </label>
                <input type="password" id="password" name="password" onChange={handleInput}
                    value={sdata.password} />
                <button onClick={sendPost}>전송</button>
            </div>
            <div>username: {sdata.username}</div>
            <div>password: {sdata.password}</div>
            <hr />
            <div className="result-box">
                <div>서버에서 전송받은 값:</div>
                <div>{mydata}</div>
            </div>
        </div>
    )
};

export default Ex17;