import React, { useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {

    const menu = [
        { name: 'About' },
        { name: 'Services' },
        { name: 'Clientele' },
        { name: 'Contact' },
    ]


    const [isMenuOpened, setMenuOpen] = useState(false);
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
                            {menu.map((menu, menuIndex) => (
                                <li key={menuIndex}><a href={`#${menu.name.toLowerCase()}`}>{menu.name}</a></li>
                            ))}

                        </ul>
                    </div>
                    <div className={styles.HeaderMenuButton} onClick={() => setMenuOpen(!isMenuOpened)}>
                        <img src="static/icons/menu.svg" />
                    </div>
                </div>
                {isMenuOpened && <div className={styles.MobileMenu} onClick={() => setMenuOpen(!isMenuOpened)}>
                    {menu.map((menu, menuIndex1) => (
                        <a key={menuIndex1} className={styles.MobileMenuItem} href={`#${menu.name.toLowerCase()}`}>{menu.name}</a>
                    ))}
                </div>}
            </div>
        </div>

    )
}

export default Header