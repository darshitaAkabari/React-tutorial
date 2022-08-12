import React from "react";
import App from "../App";
import About from "../components/routs/About"
import Contact from "../components/routs/Contact"
import LoginPage from "../components/LoginPage";
import {RequireAuth} from "../HOC/RequireAuth";
import AuthenticatedPage from "../components/AuthenticatedPage"
import Service from "../components/routs/Service"
import Report from "../components/routs/Report"
import {Route, Routes} from "react-router-dom"
import {PUBLIC_ROUTE, AUTH_ROUTE} from "./index"

function RouteAll() {
   return (
    <Routes>
    <Route path={PUBLIC_ROUTE.Public} element={<App />} />
    <Route path={PUBLIC_ROUTE.About} exact caseSensitive element={<About />} />
    <Route path={PUBLIC_ROUTE.Contact} element={<Contact />} />
    <Route path={PUBLIC_ROUTE.LoginPage} element={<LoginPage />} />
    <Route path={AUTH_ROUTE.AuthPage} element={<RequireAuth><AuthenticatedPage /></RequireAuth>} />
    <Route path={AUTH_ROUTE.Service} element={<RequireAuth><Service /></RequireAuth>} />
    <Route path={AUTH_ROUTE.Report} element={<RequireAuth><Report /></RequireAuth>} />
    </Routes>
   )
}

export default RouteAll