import styles from './Nav.module.css'
import { Link } from "react-router-dom";
function Nav(){
    return(
        <div className={styles.nav}>
            <div className={styles.logo}><img src="https://flowbite.com/docs/images/logo.svg" alt="" />GeekFoods</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quote">Quote</Link></li>
                <li><Link to="/restaurant">Restaurant</Link></li>
                <li><Link to="/foods">Foods</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className={styles.btn}>Get Started</button>
        </div>
    );
}

export default Nav;