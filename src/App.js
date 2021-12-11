import React, { useState } from "react";
import axios from "axios";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import authHelper from "./helpers/auth.helper";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  console.log(email, password);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("adad");
    try {
      const data = await axios({
        method: "post",
        url: "http://localhost:3000/auth/login",
        data: {
          email: email,
          password: password,
        },
        headers: { "Content-Type": "application/json" },
      });
      setToken(data.data.token);
      authHelper.setToken(data.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {token ? (
        <Dashboard/>
      ) : (
        <Login handleLogin={handleLogin} handleEmail={handleEmail} handlePassword={handlePassword}/>
      )}
    </>
  );
}
