import { useState } from "react";
import "./App.css";
import Article from "./atom/Article";
import Signup from "./pages/Signup";
import Button from "./atom/Button";
import Counter from "./pages/Counter";
//
function App() {
  const [page, setPage] = useState("count");

  return (
    <Article>
      <Button onClick={() => setPage("count")}>카운트</Button>
      <Button onClick={() => setPage("signup")}>가입</Button>
      {page === "count" && <Counter />}
      {page === "signup" && <Signup />}
    </Article>
  );
}
export default App;
