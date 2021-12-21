import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const login = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "https://radio-app-test.herokuapp.com/api/v1/auth/login",
        {
          username: username,
          password: password,
        },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data.token));

      setLoading(false);
      history.push("/uploads");
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMsg(error.response.data.msg);
    }
  };

  return (
    <div className="admin">
      <h2 className="admin-header">Admin Login</h2>
      <div className="div-login">
        <div className="div-login-logo">
          <p className="admin-loading">{loading && "Loading"}</p>
          <p className="admin-error"> {error && errorMsg}</p>
        </div>
        <div>
          <form>
            <input
              className="login-input"
              type="username"
              placeholder="username..."
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <input
              className="login-input"
              type="password"
              name="pwd"
              placeholder="password..."
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button type="submit" className="login-btn" onClick={login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
