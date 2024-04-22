import { Link } from "react-router-dom";

//  components/MavBar.jsx
const MavBar = () => {
  return (
    <nav className="flex justify-around">
      <Link to="/">Home</Link>
      <Link to="/join">join</Link>
      <Link to="/login">login</Link>
      <Link to="/playlist">playlist</Link>
    </nav>
  );
};

export default MavBar;
