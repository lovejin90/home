import React from 'react';
import HeaderScrollHook from "../../hooks/HeaderScrollHook";
import "../../assets/scss/main.scss"
const Header = () => {
  if (window.location.pathname === '/list') return null;
  return (
      <HeaderScrollHook/>
  );
};

export default Header;