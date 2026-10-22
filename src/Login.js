import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Home.css';
import bg from './images/bg.image.jpg';
import { useAuth } from './AuthContext';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useAuth();
  const from = (location.state && location.state.from) || '/';
  const notice = location.state && location.state.notice;

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Already logged in (or just logged in): go back to where the visitor was heading.
  if (user) return <Navigate to={from} replace />;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please enter your email and password.');
      return;
    }

    setLoading(true);
    const result = await login(form);
    if (!result.ok) {
      setError(result.error);
      setLoading(false);
    }
    // On success `user` is set and the <Navigate> above takes over.
  };

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${bg})` }}
    >
      <div className="auth-card">
        <p className="auth-subtitle">
          {notice || 'Log in to manage your bookings'}
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <label className="auth-label" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="auth-input"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <label className="auth-label" htmlFor="password">Password</label>
          <div className="auth-password-wrap">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="auth-input"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="auth-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {error && <p className="auth-error" role="alert">{error}</p>}

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="auth-footer">
          New here?{' '}
          <button
            type="button"
            className="auth-link"
            onClick={() => navigate('/register', { state: location.state })}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
