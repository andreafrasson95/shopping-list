import { useState } from 'react';

export default function useAuth() {
  const getAuth = () => {
    const tokenString = localStorage.getItem('isAuthenticated');
    return tokenString
  }
  const [auth, setAuth] = useState(getAuth());

  const editAuth = value => {
    localStorage.setItem('isAuthenticated', value);
    setAuth(value);
  };

  return {
    setAuth: editAuth,
    auth
  }
}