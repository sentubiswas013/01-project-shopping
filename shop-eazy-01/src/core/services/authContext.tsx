import React, { createContext, useContext, useState, useEffect } from 'react';

type UserRole = 'admin' | 'user' | 'guest';

interface AuthContextType {
  isAuthenticated: boolean;
  roles: UserRole[];
  setRoles: (roles: UserRole[]) => void;
  clearRoles: () => void;
  logout: () => void;
  extendSession: () => void;
  expiresAt: number | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Centralized session management
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expires_at');
    setRoles([]);
    setIsAuthenticated(false);
    window.sessionStorage.removeItem('token_expiry_alerted');
    window.location.href = '/';
  };

  const extendSession = () => {
    const newExpiresAt = Date.now() + 10 * 60 * 1000; // extend by 10 minutes
    localStorage.setItem('token_expires_at', newExpiresAt.toString());
    window.sessionStorage.removeItem('token_expiry_alerted');
    setExpiresAt(newExpiresAt);
  };
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [expiresAt, setExpiresAt] = useState<number | null>(null);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      const expiresAt = parseInt(localStorage.getItem('token_expires_at') || '0', 10);
      if (token && expiresAt && Date.now() < expiresAt) {
        setIsAuthenticated(true);
        setExpiresAt(expiresAt);
      } else {
        // If expired or missing, clear everything
        localStorage.removeItem('token');
        localStorage.removeItem('token_expires_at');
        setIsAuthenticated(false);
        setRoles([]);
        window.sessionStorage.removeItem('token_expiry_alerted');
        setExpiresAt(null);
      }
    };
    checkToken();
    window.addEventListener('storage', checkToken);
    const interval = setInterval(checkToken, 1000);
    return () => {
      window.removeEventListener('storage', checkToken);
      clearInterval(interval);
    };
  }, []);

  // fetchRolesFromBackend removed for now

  const clearRoles = () => {
    setRoles([]);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, roles, setRoles, clearRoles, logout, extendSession, expiresAt }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
