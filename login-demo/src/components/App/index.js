import React, { useState } from "react";
import LandingPage from "../Landing";
import LoginPage from "../Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationPage from "../Navigation";
import * as ROUTES from "../../constants/paths";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenItem = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenItem);
  return userToken?.token;
}

function App() {
  const token = getToken();

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <NavigationPage />
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
