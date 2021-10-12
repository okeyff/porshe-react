import React from 'react';
import logo from '../assets/Logo.png';
import menuBtn from '../assets/sidebar-btn.svg';

function Sidebar(props) {
  return (
    <section className="sidebar">
      <div className="sidebar__logo">
        <img className="sidebar__logo-img" src={logo} alt="logo" />
      </div>
      <h3 className="sidebar__title">911 Targa 4S</h3>
      <button className="sidebar__btn">
        <img className="sidebar__btn-img" src={menuBtn} alt="menu button" />
      </button>
    </section>
  );
}

export default Sidebar;
