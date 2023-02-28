import React, { useState } from "react";
import SidePage from "./SidePage";
import { useNavigate } from "react-router-dom";


export default function PasswordReset() {
    const host = "http://localhost:8000";
    const Navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        password: "",
        cpassword: "",
    });

    const handleOnChange = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!credentials.password || !credentials.cpassword) {
            document.getElementById("alert").style.opacity = 1;
            document.getElementById("alert").innerHTML = "Fill required fields";
            return;
        }
        if (credentials.password !== credentials.cpassword) {
            document.getElementById("alert").style.opacity = 1;
            document.getElementById("alert").innerHTML = "Password does not match";
            return;
        }
        const url = window.location.href;

        // extracting token and userId from url 
        const tokenStartIndex = url.indexOf("token=") + 6
        const tokenLastIndex = url.indexOf("&id")
        const token = url.slice(tokenStartIndex, tokenLastIndex)
        const userId = url.slice(tokenLastIndex + 4,)


        const response = await fetch(`${host}/auth/resetPassword`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token,
                userId,
                password: credentials.password
            }),
        });
        const json = await response.json();
        if (json.success) {
            Navigate("/login")
        }
        else{
            document.getElementById("invalidToken").style.opacity = 1;
        }
    };

    return (
        <>
            <div className="outer_signup" id="outer_signup">
                <div className="col1">
                    <SidePage />
                </div>
                <div className="col2">
                    <div className="upper">
                        <h2>Reset Password</h2>
                    </div>
                    <div className="middle">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleOnChange}
                                placeholder="Password"
                            />
                            <input
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                onChange={handleOnChange}
                                placeholder="Confirm Password"
                            />
                            <p className="alert" id="invalidToken">
                                Token Expired
                            </p>
                            <button className="btn" type="submit">
                                Next
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
