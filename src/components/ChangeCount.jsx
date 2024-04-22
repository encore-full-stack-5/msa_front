import { useRecoilState } from "recoil";
import { countLogState, countState } from "../store/countState";

const ChangeCount = () => {
  const [count, setCount] = useRecoilState(countState);
  const [logs, setLogs] = useRecoilState(countLogState);
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = document.getElementById("input");
    setCount(count + Number(value));
    document.getElementById("input").value = 0;
    setLogs([
      ...logs,
      { number: Number(value), date: new Date().toLocaleString() },
    ]);
  };
  return (
    <form className="flex" onSubmit={onSubmit}>
      <label
        htmlFor="input"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        input
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="input"
          id="input"
          required
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <span className="sm:ml-3">
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          ADD
        </button>
      </span>
    </form>
  );
};
export default ChangeCount;
