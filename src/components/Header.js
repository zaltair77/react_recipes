import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Capture from '../static/images/Capture.png';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className=" flex items-center justify-between px4">
    <div>
      <h1 className="h1 inline-block mr2">🍽️MyRecipes</h1>
      <span className="mr1">by</span>
      <img src={Capture} alt="CapLogo" style={{ width: 30 }} />
    </div>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
