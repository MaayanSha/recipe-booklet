import React from "react";
import {setAdminMode, unsetAdminMode} from "../store/AdminModeSlice";
import {AppDispatch} from "../store/store";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const AdminLogin = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === "admin") {
            dispatch(setAdminMode(password));
            navigate('/')
        }
        else{
            setError("Access Denied")
        }
    }

    return (
        <div className="container-xl">
            {error && <p className="text-bg-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}