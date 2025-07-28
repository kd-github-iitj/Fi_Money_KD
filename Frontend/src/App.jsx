import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import { getAuth, clearAuth } from './auth';

function App() {
  const [role, setRole] = useState(getAuth().role);

  const handleLogin = (userRole) => setRole(userRole);
  const handleLogout = () => {
    clearAuth();
    setRole(null);
  };

  if (!role) return <LoginPage onLogin={handleLogin} />;
  if (role === 'admin') return <AdminDashboard onLogout={handleLogout} />;
  return <UserDashboard onLogout={handleLogout} />;
}

export default App;
