import React, { useState, useEffect } from 'react';
import './Login.css';
import users from './User';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Esta lógica se ejecutará cada vez que el username o password cambie
        if (username && password) {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                setMessage('WELCOME ' + user.username);
            } else {
                setMessage('Invalid username or password');
            }
        } else {
            setMessage('');
        }
    }, [username, password]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Esta función previene el comportamiento predeterminado del formulario
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Ingresar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

