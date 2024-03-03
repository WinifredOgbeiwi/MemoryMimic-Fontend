import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../constant/routes';
import Home from '../pages/web/Home';
import Contact from '../pages/web/Contact';
import Privacy from '../pages/web/Privacy';
import Faq from '../pages/web/Faq';

const HomeRoutes = () => {

    return (
        <>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.PRIVACY} element={<Privacy />} />
                <Route path={ROUTES.FAQ} element={<Faq />} />
            </Routes>
        </>
    );
};

export default HomeRoutes;