import React from "react";
import { useEffect, useState } from "react";

export default function Login() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleChange(e) {
    let formName = e.target.value;
    let valueType = e.target.name;
    if (valueType == "name") {
      setName(formName);
    } else if (valueType == "email") {
      setEmail(formName);
    } else if (valueType == "password") {
      setPassword(formName);
    }
  }

  function handleSubmit(e) {
    let userDetails = { name, email, password };
    if (
      userDetails.name !== "" &&
      userDetails !== "" &&
      userDetails.password !== ""
    ) {
      let jsonuser = JSON.stringify(userDetails);
      localStorage.setItem("user", jsonuser);
    }
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-white text-4xl">Sign up</p>
      <div className="mt-9">
        <form onSubmit={handleSubmit}>
          <label className="text-white" htmlFor="name">
            Name:
          </label>
          <br></br>
          <input
            className="rounded-lg"
            value={name}
            onChange={handleChange}
            name="name"
            id="name"
            type="text"
          />
          <br></br>
          <label className="text-white" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            className="rounded-lg"
            value={email}
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
          />
          <br />
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="rounded-lg"
            value={password}
            onChange={handleChange}
            name="password"
            id="password"
            type="password"
          />
          <br />
          <button className="bg-white mt-5 px-3 py-1 rounded-lg" type="submit">
            Sign In
          </button>
          {/* <button onClick={handleClick} className="bg-white mt-5 p-2 ml-2">Sign up</button> */}
        </form>
      </div>
    </div>
  );
}
