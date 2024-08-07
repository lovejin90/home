import React from 'react';
import "../assets/scss/main.scss"
import HeaderScrollHook from "../hooks/HeaderScrollHook";

const Header = () => {
  if (window.location.pathname === '/list') return null;
  return (
      <HeaderScrollHook/>
  );
};

export default Header;