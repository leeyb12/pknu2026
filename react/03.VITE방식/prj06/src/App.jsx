import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Ex13 from "./pages/Ex13";
import Ex14 from "./pages/Ex14";
import Ex15 from "./pages/Ex15";
import Ex15a from "./pages/Ex15a";
import Ex16 from "./pages/Ex16";
import Ex17 from "./pages/Ex17";


function App() {
  return (
    <>
      <nav>
        <Link to="/ex13">예제13</Link> |{" "}
        <Link to="/ex14">예제14</Link> |{" "}
        <Link to="/ex15">예제15</Link> |{" "}
        <Link to="/ex15a">예제15a</Link> |{" "}
        <Link to="/ex16">예제16</Link> |{" "}
        <Link to="/ex17">예제17</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/ex13" element={<Ex13 />}></Route>
          <Route path="/ex14" element={<Ex14 />}></Route>
          <Route path="/ex15" element={<Ex15 />}></Route>
          <Route path="/ex15a" element={<Ex15a />}></Route>
          <Route path="/ex16" element={<Ex16 />}></Route>
          <Route path="/ex17" element={<Ex17 />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;