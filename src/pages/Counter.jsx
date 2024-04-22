import { useState } from "react";
import ViewCount from "../components/ViewCount";
import ChangeCount from "../components/ChangeCount";
import LogCount from "../components/LogCount";

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);

  return (
    <div className="container">
      <ViewCount />
      <ChangeCount />
      <hr className="m-4" />
      <LogCount logs={logs} />
    </div>
  );
};

export default Counter;
