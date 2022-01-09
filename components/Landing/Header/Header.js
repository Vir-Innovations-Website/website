import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.HeaderMain}>
            <div className={`container ${styles.HeaderContainer}`}>
                <div className={styles.Header}>
                    <img src="static/images/logo.png" alt="Logo" className={styles.HeaderImg} />
                    <div className={styles.HeaderTitle}>Vir <span>Innovations</span></div>
                </div>
                <div className={styles.HeaderOptions}>
                    <ul className={styles.HeaderList}>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Clientele</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Header