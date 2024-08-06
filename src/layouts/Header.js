import React from 'react';
import "../assets/scss/main.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import MenuComp from "../components/MenuComp";

const Header = () => {
  if (window.location.pathname === '/list') return null;
  return (
      <header className="header">
          <div className="header-wrap">
              <img src="/logo.png"/>
              <MenuComp />
          </div>
      </header>
  );
};

export default Header;