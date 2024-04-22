import { useState } from "react";
import { getAllBoards, postBoard } from "../api/board";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import { useEffect } from "react";
import { getAllPlaylist, postPlaylist } from "../api/playlist";
//  @tanstack/react-query
//  next ssr
// @tanstack/vue-query
// pages/Boards.jsx
const Playlist = () => {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    // const content = document.getElementById("content").value;
    try {
      const res = await postPlaylist({ title, userId: 1 });
      // document.getElementById("content").value = "";
      document.getElementById("title").value = "";
      getPlaylist();
    } catch (error) {
      setMsg(error.response.data);
    }
  };

  const getPlaylist = async () => {
    setIsLoading(true);
    const { data } = await getAllPlaylist();
    const board = data.sort((a, b) => b.id - a.id);
    setData(board);
  };
  useEffect(() => {
    if (data.length !== 0) setIsLoading(false);
  }, [data]);
  useEffect(() => {
    getPlaylist();
  }, []);
  return (
    <Article>
      {/* add */}
      <p>{msg}</p>
      <form onSubmit={onSubmit}>
        <Input placeholder="title" id="title" />
        <Button>add</Button>
      </form>
      {/* list view */}
      <button onClick={getPlaylist}>getBoardsgetBoards</button>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        data.map((el) => (
          <Article key={el.id}>
            <p>{el.title}</p>
          </Article>
        ))
      )}
    </Article>
  );
};
export default Playlist;
