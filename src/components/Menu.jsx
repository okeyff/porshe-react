import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu({ items }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/home" activeClassName="active" className="nav__list-link">
            Overview
          </NavLink>
        </li>

        {items &&
          items.map((item, index) => {
            return (
              <li className="nav__list-item" key={`${item}_${index}`}>
                <NavLink
                  activeClassName="active"
                  className="nav__list-link"
                  to={`${item}`.toLowerCase()}>
                  {item}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default Menu;
