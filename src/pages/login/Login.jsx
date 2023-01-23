import React, { useEffect, useRef, useState } from "react";
import { signIn } from "../../helpers/users/signIn";
import { signUp } from "../../helpers/users/signUp";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/user/userSlice";

const Login = () => {
  const [todayDate, setTodayDate] = useState("");
  const signUpForm = useRef(null);
  const loginForm = useRef(null);
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);

  //los estados del mensaje warning
  const [warningMessage, setWarningMessage] = useState(
    "This is a test message"
  );
  const warningRef = useRef(null);

  useEffect(() => {
    const date =
      "" +
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate();
    setTodayDate(date);
  }, []);

  //empty all fields
  function emptyFields() {
    signUpForm.current[0].value = "";
    signUpForm.current[1].value = "";
    signUpForm.current[2].value = "";
    signUpForm.current[3].value = "";
    signUpForm.current[4].value = "";
  }
  //create a new user
  async function handleSignup(e) {
    e.preventDefault();

    //creating user from form inputs
    let user = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      birthDate: e.target[2].value,
      email: e.target[3].value,
      password: e.target[4].value,
      addresses: [],
      role: "CUSTOMER",
    };
    //calling create user enpoint in the back
    const resp = await signUp(user);
    if (resp) {
      //user registred successfully
      console.log("success");
      emptyFields();
      showWarning("Success!!", "#A1FF69", "black");
    } else {
      //show warning registration did not complete successfully
      console.log("failed");
      showWarning("Email is already taken!", "#ff6969", "#12232C");
    }
  }

  /**
   * este metodo se encarga de mostrar un warning peronalizado al usuario
   * se le puede pasar en los argumentos mensaje, color de fondo y color de texto
   * @param {el mensaje que queremos mostrar como warning } message
   * @param {el color del background, en default esta narnaja} bgColor
   * @param {el color del texto, en default esta blanco} textColor
   */
  function showWarning(message, bgColor = "#BD7C0C", textColor = "white") {
    setWarningMessage(message);
    warningRef.current.style.display = "block";
    warningRef.current.style.backgroundColor = bgColor;
    warningRef.current.style.color = textColor;
    setTimeout(() => {
      warningRef.current.style.display = "none";
    }, 2000);
  }

  //login user
  async function loginUser(e) {
    e.preventDefault();
    let loginRequest = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    let resp = await signIn(loginRequest);
    if (resp) {
      //login successfull
      localStorage.setItem("currentUser", JSON.stringify(resp));
      dispatch(setCurrentUser(resp));
      console.log(user);
      navigation("/");
    } else {
      //login failed
      //show warning
      showWarning("Please make sure of the credentials!", "#ff6969", "#12232C");
    }
  }

  return (
    <div className="sign">
      <div className="sign_main">
        <input
          className="sign_check"
          type="checkbox"
          id="chk"
          aria-hidden="true"
        />
        <div className="wariningContiner" id="warningLogin" ref={warningRef}>
          {warningMessage}
        </div>
        <div className="sign_signup">
          <form onSubmit={handleSignup} ref={signUpForm}>
            <label className="sign_label" for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="sign_input"
              type="text"
              name="text"
              placeholder="First name"
              required
            />
            <input
              className="sign_input"
              type="text"
              name="text"
              placeholder="Last name"
              required
            />

            <input
              type="date"
              id="start"
              name="trip-start"
              className="sign_input"
              min="1940-01-01"
              max={todayDate}
              required
            />
            <input
              className="sign_input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="sign_input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button className="sign_btn">Sign up</button>
          </form>
        </div>

        <div className="sign_login">
          <form ref={loginForm} onSubmit={loginUser}>
            <label className="sign_label" for="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="sign_input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="sign_input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button className="sign_btn">Log in</button>
          </form>
        </div>
      </div>
      <div className="spacer layer3"></div>
    </div>
  );
};

export default Login;
