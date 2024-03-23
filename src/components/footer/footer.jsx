import React from 'react';
import './footer.css';
import logo from '../assests/logo.png';

const Footer = () => {
  return (
    <div>
        <div className="foot-panel3">
            <div className="logo">
            <img src={logo} alt="" />
            </div>
        </div>

        <div className="foot-panel4">
            <div className="pages">
                <a>Condition of Use</a>
                <a>Privacy Notice</a>
                <a>Your Ads Privacy Choices</a>
            </div>
            <div className="copyright">
                © 1996-2023, FolkArtify.com, Inc. or its affiliates
            </div>
        </div>
    </div>
  )
}

export default Footer;
