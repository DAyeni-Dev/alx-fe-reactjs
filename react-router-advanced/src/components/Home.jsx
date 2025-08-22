import React from "react";
import { Link } from "react-router-dom"

function Home () {
    return(
        <div>
            <h1> Home Page</h1>
            <nav>
                <Link to="/about">About</Link> |{" "}
                <Link to="/profile/details">Profile Details</Link> |{" "}
                <Link to="/profile/settings">Profile Settings</Link> |{" "}
                <Link to="/blog">Blog Post 1</Link> |{" "}
            </nav>
        </div>
    );
}

export default Home;