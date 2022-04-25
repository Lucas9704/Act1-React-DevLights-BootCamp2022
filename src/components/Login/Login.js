import "./Login.css";
import { LoginForm } from "./LoginForm";

export function Login() {
    return (
        <main className="Login">
            <section>
                <h2 className="title">Stax Food Admin Login</h2> 
            </section>
            <section className="LoginContainer">
                <LoginForm />
            </section>
        </main>
    )
}