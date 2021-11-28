import React from 'react';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import TwitterIcon from '../../assets/twitter.svg';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="flex items-end justify-end">
                    <img src={FacebookIcon} alt="" className="w-12" />
                    <img src={InstagramIcon} alt="" className="w-12" />
                    <img src={TwitterIcon} alt="" className="w-12" />
                </div>
            </div>
        </>
    );
}

export default Footer;
