import React from 'react';
import styles from './Footer.module.css'
import { FaHamburger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
function Footer() {
    return(
        <>
        <div className={styles.footer}>
            <div className={styles.logo}><p><FaHamburger />Logoipsum</p>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
            <div className={styles.icons}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
            <FaBasketballBall />

            </div>
        </div>
        </>
    );
}
export default Footer;