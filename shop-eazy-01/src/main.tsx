import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from './core/services/authContext';
import store from './core/redux/store';
import App from './App';
import SessionExpire from './shared/common/SessionExpire';

function SessionManager({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated, logout, extendSession, expiresAt } = useAuth();
  const [expireModalOpen, setExpireModalOpen] = useState(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number | null>(null);
  const alertedRef = React.useRef(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setExpireModalOpen(false);
      window.sessionStorage.removeItem('token_expiry_alerted');
      alertedRef.current = false;
      return;
    }
    const checkExpiry = () => {
      const expires = expiresAt;
      if (!expires) {
        setExpireModalOpen(false);
        window.sessionStorage.removeItem('token_expiry_alerted');
        alertedRef.current = false;
        setTimeLeftSeconds(null);
        return;
      }
      const timeLeft = expires - Date.now();
      const secondsLeft = Math.ceil(timeLeft / 1000);
      setTimeLeftSeconds(secondsLeft > 0 ? secondsLeft : 0);
      if (timeLeft <= 0) {
        // trigger logout via context so provider clears state
        logout();
        setExpireModalOpen(false);
        window.sessionStorage.removeItem('token_expiry_alerted');
        alertedRef.current = false;
        setTimeLeftSeconds(null);
        return;
      }
      // Modal appears 10 seconds before expiry
      if (timeLeft < 10 * 1000 && timeLeft > 0) {
        if (!alertedRef.current && !window.sessionStorage.getItem('token_expiry_alerted')) {
          setExpireModalOpen(true);
          window.sessionStorage.setItem('token_expiry_alerted', '1');
          alertedRef.current = true;
        }
      } else {
        setExpireModalOpen(false);
        window.sessionStorage.removeItem('token_expiry_alerted');
        alertedRef.current = false;
        setTimeLeftSeconds(null);
      }
    };
    const interval = setInterval(checkExpiry, 1000);
    return () => clearInterval(interval);
  }, [isAuthenticated, expiresAt, navigate]);

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
      <SessionExpire open={expireModalOpen} onContinue={handleContinueSession} onLogout={handleLogoutSession} remainingSeconds={timeLeftSeconds} />
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
