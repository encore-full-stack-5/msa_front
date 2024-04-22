import { useRecoilState, useRecoilValue } from "recoil";
import { countState } from "../store/countState";

const ViewCount = () => {
  const count = useRecoilValue(countState);
  return <h1 className="text-9xl">{count}</h1>;
};

export default ViewCount;
