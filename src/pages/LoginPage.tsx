// src/pages/LoginPage.tsx

import React, { useState } from 'react';
import './LoginPage.scss';

// Prop yang diterima dari App.tsx (berdasarkan kode App.tsx Anda)
interface LoginPageProps {
    onLogin: (email: string, password: string) => boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('admin@example.com'); // Default value untuk simulasi
    const [password, setPassword] = useState('admin123'); // Default value untuk simulasi
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (onLogin(email, password)) {
            // Login berhasil, state di App.tsx sudah berubah
            // Tidak perlu navigasi karena Layout akan render secara otomatis
        } else {
            setError('Kredensial salah. Silakan coba lagi.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">ADMIN DASHBOARD LOGIN</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <small className="simulation-note">
                        *Kredensial Simulasi: admin@example.com / admin123 atau user@example.com / user123
                    </small>

                    <button type="submit" className="default-button button--primary-login">
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;