import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Home.css';
import bg from './images/bg.image.jpg';
import { useAuth } from './AuthContext';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, register } = useAuth();
  const from = (location.state && location.state.from) || '/';

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to={from} replace />;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.trim().length < 2) return setError('Please enter your full name.');
    if (!EMAIL_RE.test(form.email.trim())) return setError('Please enter a valid email address.');
    if (form.password.length < 6) return setError('Password must be at least 6 characters.');
    if (form.password !== form.confirm) return setError('Passwords do not match.');

    setLoading(true);
    const result = await register(form);
    if (!result.ok) {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${bg})` }}
    >
      <div className="auth-card">
        <p className="auth-subtitle">Create your Travel Lykke account</p>

        <form onSubmit={handleSubmit} noValidate>
          <label className="auth-label" htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="auth-input"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />

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
              placeholder="At least 6 characters"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <button
              type="button"
              className="auth-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <label className="auth-label" htmlFor="confirm">Confirm password</label>
          <input
            id="confirm"
            name="confirm"
            type={showPassword ? 'text' : 'password'}
            className="auth-input"
            placeholder="Re-enter your password"
            value={form.confirm}
            onChange={handleChange}
            autoComplete="new-password"
          />

          {error && <p className="auth-error" role="alert">{error}</p>}

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <button
            type="button"
            className="auth-link"
            onClick={() => navigate('/login', { state: location.state })}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
