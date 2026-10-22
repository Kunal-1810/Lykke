import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Wrap a page in this to make it login-only. After logging in the visitor
// is sent straight back to the page they wanted.
export default function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname + location.search,
          notice: 'Please log in to continue.',
        }}
      />
    );
  }
  return children;
}
