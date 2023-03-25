import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth.js";

export function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email,password)
    handleLogin(email, password);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email || !password){
  //     return;
  //   }
  //   auth.logIn(email, password)
  //   .then((res) => {
  //     localStorage.setItem('jwt', res.token);
  //     console.log('enter')
  //     history.push('/');

  //   })

  // };

  return (
    <div className="register">
      <p className="register__welcome">Log In</p>
      <form onSubmit={handleSubmit} className="form register__form">
        <fieldset className="form__register">
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="form__input form__input_dark"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            name="password"
            type="password"
            placeholder="Password"
            className="form__input form__input_dark"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button type="submit" className="form__button form__button_dark">
          Log in
        </button>
      </form>
      <div className="register__login ">
        <Link to="/register" className="register__link">
          Not a member yet? Sign up here!
        </Link>
      </div>

    </div>
  );
}
