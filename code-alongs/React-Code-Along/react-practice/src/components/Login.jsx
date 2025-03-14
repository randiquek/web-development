import React, { useState, useContext} from "react"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom";



export default function Login() {
    const {validateLogin} = useContext(UserContext);

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        validateLogin(username, password)
            .then(() => {
                setShowError(false);
                navigate("/");
            })
            .catch(() => {
                setShowError(true);
        });
    };


    return (
        <form className="login-form">
            <h2>Login</h2>
            <div>
                {showError ? <div style={{color: "red"}}>Invalid Login</div> : ""}
                <label>Username:
                    <input type="text" value={username} onChange={((e) => setUsername(e.target.value))} />
                </label>
                <label>Password:
                    <input type="password" value={password} onChange={((e) => setPassword(e.target.value))} />
                </label>
            </div>
            <button onClick={handleSubmit}>Login</button>

        </form>
    );
}