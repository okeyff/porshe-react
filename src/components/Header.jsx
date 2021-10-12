import React from 'react';
import Menu from './Menu';

function Header(props) {
  return (
    <header className="header">
      <Menu items={['Design', 'Performance', 'Models', 'Contact']} />
      <button className="build-car">
        <span>Build your own</span>
      </button>
    </header>
  );
}

export default Header;
