import "./Login.css";
import { LoginForm } from "./LoginForm";
import { LoginSuccess } from "./LoginSuccess";

export function Login() {
    const isLogged = window.localStorage.getItem("isLogged");
    console.log(typeof isLogged);
    return (
        <main className="Login">
            {isLogged === "false" ? 
                <section>
                    <h2 className="title">Stax Food Admin Login</h2> 
                </section> : null }
            <section className="LoginContainer">
                {isLogged === "true" ? <LoginSuccess /> : <LoginForm />}
            </section>
        </main>
    )
}