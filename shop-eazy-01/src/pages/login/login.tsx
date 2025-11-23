/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { authorisationService } from '../../core/services/authorisation';
import { useAuth } from '../../core/services/authContext';
import { useNavigate } from 'react-router-dom';
import '../../index.css'
 
export function Login({ title }: { title: string }) {
  const navigate = useNavigate();
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [form, setForm] = useState({ username: 'john.doe@example.com', password: 'hashedpassword123' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotMessage, setForgotMessage] = useState('');

  
  const dispatch = useDispatch();
  const navigateToForgotPassword = () => {
    setShowForgot(true);
    setForgotMessage('');
    setForgotEmail('');
  };
  const backToLogin = () => {
    setShowForgot(false);
    setForgotMessage('');
    setForgotEmail('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (!form.username || !form.password) {
        setError('Username and password are required');
        setLoading(false);
        return;
      }
      const user = await authorisationService.login({ username: form.username, password: form.password });
      console.log('Login successful:', user);
      localStorage.setItem('token', user.email || 'dummy-token');
      const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes session
      localStorage.setItem('token_expires_at', expiresAt.toString());
      setLoading(true);
      // dispatch(showAlert({
      //   title: 'Login successful! Redirecting...',
      //   autoHide: false,
      //   type: 'success',
      // }));
      setTimeout(() => {
        navigate('/home');
      }, 1200);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed');
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotMessage('');
    if (!forgotEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(forgotEmail)) {
      setForgotMessage('Please enter a valid email address.');
      return;
    }
    setForgotLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setForgotLoading(false);
    setForgotMessage('If this email is registered, a password reset link has been sent.');
  };

  return (
    <>
      <div className="loginBody">
        <div id="login" className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}> 
          {/* Sign Up Form */}
          <div className="form-container sign-up-container">
            <form onSubmit={handleForgotSubmit}>
              <h1>Forgot Password</h1>
              <div className="social-container">
                <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
              <span>Enter your email to reset password</span>
              <input
                type="email"
                placeholder="Email"
                value={forgotEmail}
                onChange={e => setForgotEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={forgotLoading}>{forgotLoading ? 'Sending...' : 'Send Reset Link'}</button>
              {forgotMessage && <div style={{ color: forgotMessage.includes('sent') ? 'green' : 'red', marginTop: '10px' }}>{forgotMessage}</div>}
              <button type="button" className="ghost" onClick={backToLogin} style={{ marginTop: '10px' }}>Back to Login</button>
            </form>
          </div>

          {/* Sign In Form */}
          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
              <span>or use your account</span>
              <input
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                required
              />
              <a href="#" onClick={() => setIsRightPanelActive(true)}>Forgot your password?</a>
              <button type="submit" disabled={loading}>{loading ? 'Signing In...' : 'Sign In'}</button>
              {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
            </form>
          </div>

          {/* Overlay */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={() => setIsRightPanelActive(false)}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={() => setIsRightPanelActive(true)}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
