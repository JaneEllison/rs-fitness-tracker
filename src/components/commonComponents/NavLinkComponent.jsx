import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavLinkComponent = ({
  path,
  render,
  icon,
}) => (
  <NavLink to={path}>
    {render}
    {icon}
  </NavLink>
);

NavLinkComponent.defaultProps = {
  icon: null,
};

NavLinkComponent.propTypes = {
  path: PropTypes.string.isRequired,
  render: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default NavLinkComponent;
