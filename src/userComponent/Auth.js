import React, { useState } from "react";
import classes from "./Auth.module.css";
import { loginHandler } from "../redux/action";
import { useDispatch } from "react-redux";

const UserPropfile = () => {
    const dispatch = useDispatch();

    const [enterEmail, setEnteredEmail] = useState("");
    const [enterPwd, setEnterPwd] = useState("");

    const enterEmailIsValid = enterEmail.includes("abc@gmail.com")
    const enterPwdIsValid = enterPwd.includes("123456789")

    let formIsValid = false;

    if (enterEmailIsValid && enterPwdIsValid) {
        formIsValid = true
    }


    const loginData = (event) => {
        event.preventDefault();
        console.log(enterEmail, enterPwd);
        if (!enterEmailIsValid) {
            return
        }
        if (!enterPwdIsValid) {
            return
        }

        setEnteredEmail("")
        setEnterPwd("")
        dispatch(loginHandler());
    };

    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={loginData}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="on"
                            value={enterEmail}
                            onChange={(event) => {
                                setEnteredEmail(event.target.value);
                            }}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="on"
                            value={enterPwd}
                            onChange={(event) => {
                                setEnterPwd(event.target.value);
                            }}
                        />
                    </div>
                    <button className={classes.b1} disabled={!formIsValid}  >
                        Login
                    </button>
                </form>
            </section>
        </main>
    );
};

export default UserPropfile;
