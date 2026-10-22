import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

// Simple browser-only accounts (localStorage). Replace register/login with
// API calls when you add a backend; the rest of the app will keep working.
const USERS_KEY = 'tl_users';
const SESSION_KEY = 'tl_session';

function readJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

async function hashPassword(email, password) {
  const text = `${email}::${password}`;
  try {
    if (window.crypto && window.crypto.subtle) {
      const digest = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
      return Array.from(new Uint8Array(digest))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    }
  } catch (e) {
    /* fall through */
  }
  return `plain:${text}`;
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readJSON(SESSION_KEY, null));

  const register = useCallback(async ({ name, email, password }) => {
    const cleanEmail = email.trim().toLowerCase();
    const users = readJSON(USERS_KEY, []);
    if (users.some((u) => u.email === cleanEmail)) {
      return { ok: false, error: 'An account with this email already exists. Please log in.' };
    }
    const passwordHash = await hashPassword(cleanEmail, password);
    const newUser = { name: name.trim(), email: cleanEmail, passwordHash };
    if (!writeJSON(USERS_KEY, [...users, newUser])) {
      return { ok: false, error: 'Could not save your account. Please allow local storage in your browser.' };
    }
    const session = { name: newUser.name, email: newUser.email };
    writeJSON(SESSION_KEY, session);
    setUser(session);
    return { ok: true };
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const cleanEmail = email.trim().toLowerCase();
    const users = readJSON(USERS_KEY, []);
    const found = users.find((u) => u.email === cleanEmail);
    if (!found) {
      return { ok: false, error: 'No account found with this email. Please create an account first.' };
    }
    const passwordHash = await hashPassword(cleanEmail, password);
    if (found.passwordHash !== passwordHash) {
      return { ok: false, error: 'Incorrect password. Please try again.' };
    }
    const session = { name: found.name, email: found.email };
    writeJSON(SESSION_KEY, session);
    setUser(session);
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    try {
      window.localStorage.removeItem(SESSION_KEY);
    } catch (e) {
      /* ignore */
    }
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, register, login, logout }), [user, register, login, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
