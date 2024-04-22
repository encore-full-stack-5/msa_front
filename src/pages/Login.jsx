import { useNavigate } from "react-router-dom";
import { login, register } from "../api/auth";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";

// Signup.jsx
// npm i axios
// fetch
const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const res = await login({ username, password });
    if (res.status === 200) {
      localStorage.setItem("access-token", res.data);
      navigate("/playlist");
    }
    // Storage cookie localStorage 써야하는 이유
    console.log(res);
  };

  return (
    <div className="container">
      <Article>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">name</Label>
          <Input id="name" required />
          <Label htmlFor="password">password</Label>
          <Input id="password" type="password" required />
          <hr className="m-4" />
          <Button>submit</Button>
        </form>
      </Article>
    </div>
  );
};

export default Login;
