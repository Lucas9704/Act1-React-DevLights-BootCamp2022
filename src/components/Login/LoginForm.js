import "./LoginForm.css";
import showPass from "./icons/show.png";
// import hidePass from "./icons/2.svg";

export function LoginForm() {
    return (
        <form className="LoginForm">
            <h3 className="LoginFormTitle">Please fill in your unique admin login details below</h3>
            <div className="userTypeContainer">
                <div className="userType">
                    <input type="radio" name="radio" id="radio1" value="Student" checked />
                    <label>Student</label>
                </div>
                <div className="userType">
                <input type="radio" name="radio" id="radio1" value="Teacher" />
                <label>Teacher</label>
                </div>
            </div>
            <div className="LoginFormContainer">
                <label htmlFor="email" className="LoginFormInputLabel">Email address</label>
                {/* <input name="email" id="email" type="email" className="LoginFormInput" value={email} onChange={onEmailChange} /> */}
                <input name="email" id="email" type="email" className="LoginFormInput" />
                <label htmlFor="password" className="LoginFormInputLabel">Password</label>
                {/* <input name="password" id="password" value={password} type="password" className="LoginFormInput" onChange={onPasswordChange} /> */}
                <div className="PasswordContainer">
                <input name="password" id="password" type="password" className="LoginFormInput" />
                <button className="buttonContainer" type="button" onClick={showPass} >
                    <img src={showPass} alt="showPass" className="imgIcon" />
                </button>
                </div>
            </div>
            <div className="forgotPasswordContainer" onClick={() => {}} > Forgot your password? <br /></div>
                {/* <button className="LoginFormButton" onClick={handleClick}>Ingresar</button> */}
            <div className="userTypeContainer">
                <button className="LoginFormButton" >Sing In</button>
            </div>
                {/* {error.length > 0 ? (
                <div className="LoginFormError">
                    {error}
                </div>
                ) : null} */}
        </form>
    )
}

