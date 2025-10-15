import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from './core/services/authContext';
import store from './core/redux/store';
import App from './App';
import SessionExpire from './shared/components/SessionExpire';

function SessionManager({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated, logout, extendSession } = useAuth();
  const [expireModalOpen, setExpireModalOpen] = useState(false);
  const alertedRef = React.useRef(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setExpireModalOpen(false);
      window.sessionStorage.removeItem('token_expiry_alerted');
      alertedRef.current = false;
      return;
    }
    const checkExpiry = () => {
      const token = localStorage.getItem('token');
      const expiresAt = parseInt(localStorage.getItem('token_expires_at') || '0', 10);
      if (!token || !expiresAt) {
        setExpireModalOpen(false);
        window.sessionStorage.removeItem('token_expiry_alerted');
        alertedRef.current = false;
        return;
      }
      const timeLeft = expiresAt - Date.now();
      if (timeLeft <= 0) {
        localStorage.removeItem('token');
        localStorage.removeItem('token_expires_at');
        setExpireModalOpen(false);
        window.sessionStorage.removeItem('token_expiry_alerted');
        alertedRef.current = false;
        navigate('/');
        return;
      }
  // Modal appears 10 seconds before expiry
  if (timeLeft < 10 * 1000 && timeLeft > 0) {
        if (!alertedRef.current) {
          setExpireModalOpen(true);
          window.sessionStorage.setItem('token_expiry_alerted', '1');
          alertedRef.current = true;
        }
      } else {
        setExpireModalOpen(false);
        window.sessionStorage.removeItem('token_expiry_alerted');
        alertedRef.current = false;
      }
    };
    const interval = setInterval(checkExpiry, 1000);
    return () => clearInterval(interval);
  }, [isAuthenticated, navigate]);

  const handleContinueSession = () => {
    extendSession();
    setExpireModalOpen(false);
  };

  const handleLogoutSession = () => {
    logout();
    setExpireModalOpen(false);
  };

  return (
    <>
      <SessionExpire open={expireModalOpen} onContinue={handleContinueSession} onLogout={handleLogoutSession} />
      {children}
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <Provider store={store}>
      <BrowserRouter>
        <SessionManager>
          <App />
        </SessionManager>
      </BrowserRouter>
    </Provider>
  </AuthProvider>
);
