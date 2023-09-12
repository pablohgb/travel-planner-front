import React, { useState } from 'react';
import apiClient from '../../api/ApiClient';
import { registerUser } from '../../api/auth'


function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Perform login logic with username and password

        setUsername('');
        setPassword('');
        const userInfo = { username: username, password: password };
        registerUser(userInfo);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
