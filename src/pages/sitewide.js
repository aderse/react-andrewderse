import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
    return(
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" className="nav-link">
                        Resume
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dadjokes" className="nav-link">
                        50 Dad Jokes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export function Header() {
    return (
        <header className="mb-5">
            <h1 className="text-center p-5">Andrew Derse</h1>
            <Menu />
        </header>
    );
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        &copy; Copyright 2023 - Andrew Derse - All Rights Reserved
                        <Menu />
                    </div>
                    <div className="col-sm text-right">
                        <a className="mr-3" href="https://www.facebook.com/derseandrew"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i> </a>
                        <a href="https://www.linkedin.com/in/andrew-derse-56692235/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i> </a>
                    </div>
                </div>
            </div>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        </footer>
    );
}