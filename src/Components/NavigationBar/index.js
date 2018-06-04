import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';

const NavigationBar = ({ links, location }) => console.log(location) || (
  <nav>
    <div className={styles.navContent}>
      <div className={
        location.pathname === '/' ? styles.logoSelected : styles.logo}
      >
        <Link to="/" className={styles.logoLink}>melvin<span>.tech</span></Link>
      </div>
      <ul className={styles.navLinks}>
        {links.map(link =>
          <li className={location.pathname === `/${link}` ? styles.selected : styles.regular}><Link to={link}>{link}</Link></li>
        )}
      </ul>
    </div>
  </nav>
);

export default NavigationBar;
