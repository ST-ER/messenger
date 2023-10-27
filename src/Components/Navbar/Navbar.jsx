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
						<NavLink
							to='/profile'
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							home
						</NavLink>
					</div>

					<div className={`${styles.chat} ${styles.item}`}>
						<NavLink
							to='/chats'
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							chat
						</NavLink>
					</div>
					<div className={`${styles.contact} ${styles.item}`}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							contact
						</NavLink>
					</div>
					<div className={`${styles.notifications} ${styles.item}`}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							notifications
						</NavLink>
					</div>
					<div className={`${styles.calendar} ${styles.item}`}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							calendar
						</NavLink>
					</div>
					<div className={`${styles.settings} ${styles.item}`}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							settings
						</NavLink>
					</div>
					<div className={`${styles.logout} ${styles.item}`}>
						<NavLink to='/' className={({ isActive }) =>
								isActive ? styles.active : undefined
							}>log out</NavLink>
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

