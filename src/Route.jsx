import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./constant/routes";

import Home from "./pages/web/Home";
import Contact from "./pages/web/Contact";
import Privacy from "./pages/web/Privacy";
import Faq from "./pages/web/Faq";
import Header from "./layout/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Footer from "./layout/Footer";

const RouteLinks = () => {
  const [isNavShown, setNavShown] = useState(false);
  const location = useLocation();
  const showHeader = [
    ROUTES.ABOUT,
    ROUTES.CONTACT,
    ROUTES.FAQ,
    ROUTES.GUIDE,
    ROUTES.HOME,
  ];
  const shouldShowHeader = showHeader.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && (
        <Header isNavShown={isNavShown} setNavShown={setNavShown} />
      )}
      <main className={`${isNavShown ? "nav-container-opacity" : ""}`}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PRIVACY} element={<Privacy />} />
          <Route path={ROUTES.FAQ} element={<Faq />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Routes>
      </main>
      {shouldShowHeader && (<Footer />)}
    </>
  );
};

export default RouteLinks;
