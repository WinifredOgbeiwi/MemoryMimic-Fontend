import React, { useEffect, useState } from "react";
import '../styles/homepage.css'
import { Link, useLocation } from "react-router-dom";
import { navdata } from "../constant/data";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { MOBILE_WINDOW_SIZE, Mapping } from "../utils/util";
import Button from "../components/common/Button";

const Header = () => {

    const [isNavShown, setNavShown] = useState(false)

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
                <h4>MemoryMimic</h4>
            </header>
            {windowWidth > MOBILE_WINDOW_SIZE ? 
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
                    )} />  
            </ul>
                    <div className="nav_buttons">
                        <Button text="Login " specific="nav_button2" />
                        <Button text="Register" specific="nav_button" />
                    </div>
            </> : 
            <>
                    {isNavShown ? <FaTimes className="nav-menu" onClick={() => setNavShown(!isNavShown)} /> : <AiOutlineMenuUnfold className="nav-menu" onClick={() => setNavShown(!isNavShown)} />}
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
                            )} />
                    </ul>
                    <div className="nav_buttons">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>

            )} 
            </>
           }

        </nav>
    );
};

export default Header;
