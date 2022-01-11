import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.HeaderWrapper}>
            <div className={`container `}>
                <div className={`${styles.Header}`}>
                    <div className={styles.Logo}>
                        <img src="static/images/logo.png" alt="Logo" className={styles.HeaderImg} />
                        <div className={styles.HeaderTitle}>Vir <span>Innovations</span></div>
                    </div>
                    <div className={styles.HeaderMenu}>
                        <ul className={styles.HeaderList}>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#">Clientele</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header