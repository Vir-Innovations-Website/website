import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.HeaderWrapper}>
            <div className="container">
                <div className={`${styles.Header}`} id="header">
                    <div className={styles.Logo}>
                        <a href="#hero">
                            <img src="static/images/logo.png" alt="Logo" className={styles.HeaderImg} />
                        </a>
                        <div className={styles.HeaderTitle}>
                            <a href="#hero">
                            Vir <span>Innovations</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.HeaderMenu}>
                        <ul className={styles.HeaderList}>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#clientele">Clientele</a></li>
                            <li><a href="#contact-us">Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.HeaderMenuButton}>
                        <img src="static/icons/menu.svg" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header