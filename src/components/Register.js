import React from "react";
import { useState } from "react";
import * as auth from "../utils/auth.js";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <p className="register__welcome">Sign up</p>
      <form onSubmit={handleSubmit} className="form register__form">
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
          Sigm Up
        </button>
      </form>
      <div className="register__login">
        <a to="/login" className="signup__link">
          Already a member? Log in here!
        </a>
      </div>
    </div>
  );
}
