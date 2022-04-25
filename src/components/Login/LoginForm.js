import "./LoginForm.css";
import showPass from "./icons/show.png";
import hidePass from "./icons/hide.png";
import { useState } from "react";

/**
 * Datos validos para login de Student:
 *      - Email: "canteroslukss@gmail.com"
 *      - password: "Abc1234"
 * Datos validos para login de Teacher:
 *     - Email: "fedeloebarth@devlights.com"
 *     - Email: "agustinramirez@devlights.com"
 *     - password: "Abc1234"
 */

export function LoginForm() {
    const [loginType, setLoginType] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit() {
        if (loginType === "student") {
            if (email === "canteroslukss@gmail.com") {
                if (password === "Abc1234") {
                    window.localStorage.setItem("user", loginType);
                    window.localStorage.setItem("email", email);
                    window.localStorage.setItem("name", "Lucas");
                    window.localStorage.setItem("isLogged", true);
                    setError("");
                } else {
                    setError("Password incorrect");
                    window.localStorage.setItem("isLogged", false);
                }
            } else {
                setError("Email incorrect");
                window.localStorage.setItem("isLogged", false);
            }
        } else if (loginType === "teacher") {
            if (email === "fedeloebarth@devlights.com" || email === "agustinramirez@devlights.com") {
                if (password === "Abc1234") {
                    window.localStorage.setItem("user", "teacher");
                    window.localStorage.setItem("email", email);
                    window.localStorage.setItem("name", email === "fedeloebarth@devlights.com" ? "Federico" : "Agustin");
                    window.localStorage.setItem("isLogged", true);
                    setError("");
                } else {
                    setError("Password incorrect");
                    window.localStorage.setItem("isLogged", false);
                }
            } else {
                setError("Email incorrect");
                window.localStorage.setItem("isLogged", false);
            }
        } else {
            setError("Select a type of user");
            window.localStorage.setItem("isLogged", false);
        }
    }

    function onEmailChange(event) { 
        setEmail(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    function onShowPasswordClick() {
        setShowPassword(!showPassword);
    }

    function onTypeChange(event) {
        setLoginType(event.target.value);
    }

    return (
        <form className="LoginForm">
            <h3 className="LoginFormTitle">Please fill in your unique admin login details below</h3>
            {error.length > 0 ? (
                <div className="LoginFormError">
                    {error}
                </div>)
                : null}
            <div className="userTypeContainer">
                <div className="userType">
                    <input type="radio" name="radio" value="student" onClick={onTypeChange} />
                    <label>Student</label>
                </div>
                <div className="userType">
                <input type="radio" name="radio" value="teacher" onClick={onTypeChange} />
                <label>Teacher</label>
                </div>
            </div>
            <div className="LoginFormContainer">
                <label htmlFor="email" className="LoginFormInputLabel">Email address</label>
                <input name="email" id="email" type="email" className="LoginFormInput" value={email} onChange={onEmailChange} />
                <label htmlFor="password" className="LoginFormInputLabel">Password</label>
                <div className="PasswordContainer">
                <input name="password" id="password" type={showPassword ? "text" : "password"} className="LoginFormInput" value={password} onChange={onPasswordChange} />
                <button className="buttonContainer" type="button" value={showPassword} onClick={onShowPasswordClick} >
                    <img src={showPassword ? showPass : hidePass} alt="showPass" className="imgIcon" />
                </button>
                </div>
            </div>
            <div className="forgotPasswordContainer" onClick={() => {}} > <a href=""> Forgot your password? </a></div>
            <div className="forgotPasswordContainer" onClick={() => {}} > <a href="#"> Register your account</a></div>
            <div className="userTypeContainer">
                <button className="LoginFormButton" onClick={handleSubmit} >Sing In</button>
            </div>
        </form>
    )
}

