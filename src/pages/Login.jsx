import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk, logoutThunk } from "../store/slices/userInfo.slice";
import "./styles/Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const { token, user } = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginUserThunk(data));
    console.log(data);
  };

  const handleClickLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <main className="login">
      {token ? (
        <section className="login__loged">
          <i className="login__loged-icon bx bx-user-circle"></i>
          <h3 className="login__loged-name">
            {user.firstname} {user.lastname}
          </h3>
          <button className="login__loged-btn" onClick={handleClickLogout}>
            {" "}
            Logout
          </button>
        </section>
      ) : (
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <h3 className="login__title">
            Welcome! Enter your email and password to continue
          </h3>
          <div className="login__container-test">
            <h4 className="login__test-title">Test data</h4>
            <p className="login__test-email">
              <i className="bx bx-envelope"></i> john@gmail.com
            </p>
            <p className="login__test-password">
              <i className="bx bx-lock-alt"></i> john1234
            </p>
          </div>
          <div className="login__field">
            <label className="login__label">Email</label>
            <input
              className="login__input"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="login__field">
            <label className="login__label">Password</label>
            <input
              className="login__input"
              type="password"
              {...register("password")}
            />
          </div>
          <button className="login__btn">Login</button>
          <p className="login__test-footer">
            Dont have account? <span>Sign up</span>
          </p>
        </form>
      )}
    </main>
  );
};

export default Login;
