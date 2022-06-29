import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./Mainheader.module.css";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../redux/action";



const Mainheader = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutHandler());
    };


    return (
        <div>
            <header className={classes.header}>
                <nav>
                    <ul>

                        <li>
                            <NavLink activeClassName={classes.active} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/crud">
                                Crud
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/counter">Counter</NavLink>
                        </li>
                        <li>
                            <button onClick={logout} className={classes.b1}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Mainheader;
