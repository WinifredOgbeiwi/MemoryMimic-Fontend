import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../constant/routes';
import Home from '../pages/web/Home';
import Contact from '../pages/web/Contact';
import Privacy from '../pages/web/Privacy';
import Faq from '../pages/web/Faq';
import Header from '../layout/Header';

const HomeRoutes = () => {
    const [isNavShown, setNavShown] = useState(false);
    return (
        <>
            
            <Header isNavShown={isNavShown} setNavShown={ setNavShown}/>
            <main className={`${isNavShown ? 'nav-container-opacity' : ''}`}>
                 <Routes >
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.PRIVACY} element={<Privacy />} />
                <Route path={ROUTES.FAQ} element={<Faq />} />
            </Routes>
            </main>
           
        </>
    );
};

export default HomeRoutes;