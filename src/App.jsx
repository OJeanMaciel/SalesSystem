import React, { useEffect, useState } from 'react';
import { Space } from 'antd';
import './App.css';
import Header from './components/AppHeader/Header';
import PageContent from './components/PageContent/PageContent';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/AppFooter/Footer';
import Login from './pages/Login/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ login: '', role: '', token: '' });

  const handleLogin = (user) => {
    const { token, login, role } = user;
    localStorage.setItem('token', token);
    localStorage.setItem('login', login);
    localStorage.setItem('role', role);

    setUser({ login, role, token });
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedLogin = localStorage.getItem('login');
    const storedRole = localStorage.getItem('role');

    if (storedToken && storedLogin && storedRole) {
      setUser({ login: storedLogin, role: storedRole, token: storedToken });
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ login: '', role: '', token: '' });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    localStorage.removeItem('role');
  };

  return (
    <div className='App'>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Header onLogout={handleLogout} user={user} />
          <Space className='SideMenuAndPageContent'>
            <SideMenu onLogout={handleLogout} user={user} />
            <PageContent />
          </Space>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;