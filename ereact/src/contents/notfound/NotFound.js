import './NotFound.css';
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => { // implement 404 page
    return (
        <body id="body">
            <div className="not-fount">
            <div>
                <h2 className="not-fount-title">404 Not Found</h2>
                <p className="not-fount-text-break">Have a break?</p>
                <p className="not-fount-text">That page cannot be found</p>
                <Link to="/ ">Back to the homepage...</Link>
            </div>
            </div>
        </body>
    );
}

export default NotFound;