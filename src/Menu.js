import React from 'react';
import { NavLink }  from 'react-router-dom';
const Menu = () =>
   {
return (
<div>
<NavLink exact activeClassName="active-css" to='/'>HOME  </NavLink>
<NavLink activeClassName="active-css" to='/about'> About us  </NavLink>
<NavLink activeClassName="active-css" to='/contact'> Login </NavLink>
<NavLink className={({ isActive }) => isActive ? "active-css" : ""} to='/info'> Bookings </NavLink>
</div>
);
};
export default Menu;