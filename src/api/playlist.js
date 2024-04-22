import { api } from "../config/network";

export const getAllPlaylist = async () => {
  const res = await api("/api/v1/playlists", "get");
  return res;
};
export const postPlaylist = async (data) => {
  const res = await api("/api/v1/playlists", "post", data);
  return res;
};
