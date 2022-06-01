import React from "react";
import { NavLink } from "react-router-dom";
import { IconName } from "react-icons/fa";
import "./index.css";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav bg">
                <div className="row">
                    <div className="col-10 mx-auto">


                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="container-fluid">

                                <NavLink className="navbar-brand" to="/">Sample </NavLink>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav ml-auto ml-2 ml-lg-0">
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/service"
                                            >
                                                Services
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/about"
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/contact"
                                            >
                                                Contact
                                            </NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;