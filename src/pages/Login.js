import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {name, surname};
    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    history.push("/home")
  };

  return (
    <div className="container">
      <h4 className="title">WELCOME TODO LIST</h4>
      <form className="form">
        <div className="form-group">
          <label className="label-area">
            Name
            <input
              className="name"
              type="text"
              value={name}
              placeholder="Enter a username"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label className="label-area">
            Surname
            <input
              className="surname"
              type="text"
              value={surname}
              placeholder="Enter a usersurname"
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>
        </div>
        <button className="login-button" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
