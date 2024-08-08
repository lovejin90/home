import React from 'react';
import MenuComp from "../../components/MenuComp";
import {Mobile, PC} from "../../index";

const Footer = () => {
  if (window.location.pathname === '/list') return null;
  return (
      <>
         푸터
      </>
  );
};

export default Footer;