import React from 'react';
import styles from './Navbar.module.css';


const Navbar = () => {
    const nav =[

    ]
    return (
			<div className={`${styles.navbar} item navbar`}>
				<img src='/avatar.jpg' alt='avatar' />
				<div className={styles.name}>Egor Starovoytov</div>
				<div className={styles.home}>home</div>
				<div className={styles.chat}>chat</div>
				<div className={styles.contact}>contact</div>
				<div className={styles.notifications}>notifications</div>
				<div className={styles.calendar}>calendar</div>
				<div className={styles.settings}>settings</div>
				<div className={styles.logout}>log out</div>
			</div>
		)
};

export default Navbar;

