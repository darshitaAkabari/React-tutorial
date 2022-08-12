import React from "react";
import { Link } from "react-router-dom";
import Header from "../HOC/Header";

const AuthenticatedHOC = Header(AuthenticatedPage,{name: ""})
function AuthenticatedPage() {
    return (
        <div>
            <h1>
                Authenticated page
            </h1>
            <Link to="service">Service</Link><br/>
            <Link to="report">Report</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default AuthenticatedHOC
 