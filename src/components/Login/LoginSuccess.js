import "./LoginSuccess.css";

function logOut() {
    window.localStorage.setItem("isLogged", false);
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("name");
}

export function LoginSuccess() {
    return (
        <main className="LoginSuccess">
            <section className={window.localStorage.getItem("user") === "student" ? "LoginSuccessStudent" : "LoginSuccessTeacher"}>
                <h3 className={window.localStorage.getItem("user") === "student" ? "titleSuccess" : "titleSuccessT"} >Welcome {window.localStorage.getItem("name")}</h3>
                <p className="subtitle">You are now logged as {window.localStorage.getItem("user")}</p>
                <p className="subtitle">Email: {window.localStorage.getItem("email")}</p>
                <button className="button" onClick={logOut}>Log out</button>
            </section>
        </main>
    )
}