import React from "react";
import { useState } from "react";
import * as auth from "../utils/auth.js";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <p className="login__welcome">Log In</p>
      <form onSubmit={handleSubmit} className="form login__form">
        <fieldset className="form__register">
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="form__input form__input_dark"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            id="password"
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
      <div className="login__signup">
        <a to="/register" className="signup__link">
          Not a member yet? Sign up here!
        </a>
      </div>
    </div>
  );
}
