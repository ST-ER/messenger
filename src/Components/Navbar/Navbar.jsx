import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
			<div className={styles.navbar}>
				<img src='/avatar.jpg' alt='avatar' />
				<div className={styles.name}>Egor Starovoytov</div>
				<nav>
					<div className={`${styles.home} ${styles.item}`}>
						<NavLink to='/profile'>home</NavLink>
					</div>
					<div className={`${styles.chat} ${styles.item}`}>
						<NavLink to='/chats'>chat</NavLink>
					</div>
					<div className={`${styles.contact} ${styles.item}`}>
						<NavLink to='/'>contact</NavLink>
					</div>
					<div className={`${styles.notifications} ${styles.item}`}>
						<NavLink to='/'>notifications</NavLink>
					</div>
					<div className={`${styles.calendar} ${styles.item}`}>
						<NavLink to='/'>calendar</NavLink>
					</div>
					<div className={`${styles.settings} ${styles.item}`}>
						<NavLink to='/'>settings</NavLink>
					</div>
					<div className={`${styles.logout} ${styles.item}`}>
						<NavLink to='/'>log out</NavLink>
					</div>
					{/* <div className={styles.contact}>contact</div>
					<div className={styles.notifications}>notifications</div>
					<div className={styles.calendar}>notifications</div>
					<div className={styles.settings}>settings</div>
					<div className={styles.logout}>log out</div> */}
				</nav>
			</div>
		)
};
export default Navbar;

