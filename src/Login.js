import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import bg from './images/bg.image.jpg';
import logo from './images/logo.svg';


const [form, setForm] = useState({ email: '', password: '' });
const [showPassword, setShowPassword] = useState(false);
const [error, setError] = useState('');

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
  setError('');
};

const handleLogin = (e) => {
  e.preventDefault();
  if (!form.email || !form.password) {
    setError('Please enter your email and password.');
    return;
  }
  // TODO: call your login API here
  console.log('Login:', form.email);
};

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
    try {

      navigate('/');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${bg})` }}
    >
      <button className="auth-logo-btn" onClick={() => navigate('/')} aria-label="Go to home">
        <img src={logo} alt="Logo" />
      </button>

      <div className="auth-card">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Log in to manage your bookings</p>

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
          <button type="button" className="auth-link" onClick={() => navigate('/register')}>
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;