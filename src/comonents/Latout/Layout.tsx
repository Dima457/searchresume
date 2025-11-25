import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>HH Parser</h1>
          </Link>
          <nav className="navigation">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Главная
            </Link>
            <Link 
              to="/candidates" 
              className={`nav-link ${location.pathname === '/candidates' ? 'active' : ''}`}
            >
              Кандидаты
            </Link>
          </nav>
        </div>
      </header>
      
      
      <main className="main-content">
        {children}
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 HH Parser. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;