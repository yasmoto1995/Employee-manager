import React, { useState, useEffect } from "react";
import "./loginPage.css";
import Login from "../../components/loginPageComponents/Login/Login";
import Home from "../../components/loginPageComponents/Home/Home";
import MainHeader from "../../components/loginPageComponents/MainHeader/MainHeader";
import Main from "../main/mainPage";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Main></Main>}
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
