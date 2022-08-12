import React from "react";
import { Link } from "react-router-dom";

function PublicPage() {
    return (
        <div>
            <h1>Public page</h1>
            <nav>
                <Link to="/contact">Contact</Link> <br />
                <Link to="/about">About</Link><br />
                <Link to="/authenticatedPage">Profile</Link>
            </nav>
        </div>
    )
}

export default PublicPage