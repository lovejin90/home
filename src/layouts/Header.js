import React from 'react';
import "../assets/scss/main.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import MenuComp from "../components/MenuComp";
import HeaderScrollHook from "../hooks/HeaderScrollHook";

const Header = () => {
  if (window.location.pathname === '/list') return null;
  return (
      <HeaderScrollHook/>
  );
};

export default Header;