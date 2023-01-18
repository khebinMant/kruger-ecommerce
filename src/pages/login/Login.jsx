import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="sign_main">
      <input
        className="sign_check"
        type="checkbox"
        id="chk"
        aria-hidden="true"
      />

      <div className="sign_signup">
        <form action="">
          <label className="sign_label" for="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            className="sign_input"
            type="text"
            name="text"
            placeholder="User name"
            required=""
          />
          <input
            className="sign_input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            className="sign_input"
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <button className="sign_btn">Sign up</button>
        </form>
      </div>

      <div className="sign_login">
        <form>
          <label className="sign_label" for="chk" aria-hidden="true">
            Login
          </label>
          <input
            className="sign_input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            className="sign_input"
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <button className="sign_btn">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
