import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";
import { useState } from "react";

// Signup.jsx
// npm i axios
// fetch
const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;
    try {
      const res = await register({ username: name, password, nickname });
      if (res.status === 200) navigate("/login");
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div className="container">
      <Article>
        <p>{message}</p>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">name</Label>
          <Input id="name" required />
          <Label htmlFor="nickname">nickname</Label>
          <Input id="nickname" required />
          <Label htmlFor="password">password</Label>
          <Input id="password" type="password" required />

          <hr className="m-4" />
          <Button>submit</Button>
        </form>
      </Article>
    </div>
  );
};

export default Signup;
