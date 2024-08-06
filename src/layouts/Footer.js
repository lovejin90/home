import React from 'react';
import MenuComp from "../components/MenuComp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  if (window.location.pathname === '/list') return null;
  return (
    <footer className="footer">
        <div className="footer-info-wrap">
            <div className="footer-info">
                <img src="/logo.png"/>
                <div className="footer-info-txt">
                    <p>- Creative Photo Studio</p>
                    <span>Sed non auctor magna. Nunc eu ultrices orci. Donec commodo ligula in massa ultricies volutpat. Fusce vel cursus lectus. Cras commodo odio mi, eu cursus nibh iaculis ut.</span>
                </div>
                <div className="footer-info-share">
                    <ul>
                        <li>페</li>
                        <li>트</li>
                        <li>구</li>
                        <li>페</li>
                        <li>인</li>
                        <li>메</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-site-info">
            <div className="footer-site-info-txt">
                <p>© Sepia 2222 / All rights reserved</p>
                <span>Design by: 1</span>
            </div>
            <div className="footer-site-info-menu">
                <MenuComp />
            </div>
        </div>
    </footer>
  );
};

export default Footer;