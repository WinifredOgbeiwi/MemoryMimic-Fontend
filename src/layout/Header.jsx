import React, { useEffect, useState } from "react";
import "../styles/homepage.css";
import { Link, useLocation } from "react-router-dom";
import { navdata } from "../constant/data";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { MOBILE_WINDOW_SIZE, Mapping } from "../utils/util";
import Button from "../components/common/Button";
import { ROUTES } from "../constant/routes";

const Header = ({ isNavShown, setNavShown }) => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = useLocation();

  const pathRoute = (route) => {
    if (route === location.pathname) return true;
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav-container flex">
      <header>
        <h2>MemoryMimic</h2>
      </header>
      {windowWidth > MOBILE_WINDOW_SIZE ? (
        <>
          <ul className="nav-list">
            <Mapping
              of={navdata}
              render={(item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`${pathRoute(item.path) && "path-design"}`}
                >
                  {item.text}
                </Link>
              )}
            />
          </ul>
          <div className="nav-buttons">
            <Button text="Login " specific="nav-button2" location={ROUTES.LOGIN} />
            <Button text="Register" specific="nav-button" location={ROUTES.REGISTER} />
          </div>
        </>
      ) : (
        <>
          {isNavShown ? (
            <FaTimes
              className="nav-menu"
              onClick={() => setNavShown(!isNavShown)}
            />
          ) : (
            <AiOutlineMenuUnfold
              className="nav-menu"
              onClick={() => setNavShown(!isNavShown)}
            />
          )}
          {isNavShown && (
            <div className="mobile-nav">
              <ul className=" nav-list">
                <Mapping
                  of={navdata}
                  render={(item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className={`${pathRoute(item.path) && "path-design"}`}
                    >
                      {item.text}
                    </Link>
                  )}
                />
              </ul>

              <div className="nav-buttons">
                <Button text="Login " specific="nav-button2" location={ROUTES.LOGIN} />
                <Button text="Register" specific="nav-button" location={ROUTES.REGISTER} />
              </div>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Header;
