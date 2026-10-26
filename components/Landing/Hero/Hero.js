import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.HeroSectionContainer} id="hero">
            <div className="container d-flex h-100 align-items-end align-items-md-center">
                <div className={styles.HeroSectionWrapper} >
                    <div className={styles.HeroSectionHeading}>
                        INNOVATION <br />STARTS WITH <span>US</span>
                    </div>
                    <div className={styles.HeroSectionText}>
                        A performance driven team of young pioneer working to solve problems in Manufacturing and Consumer Electronics.
                    </div>

                    <a href='#about' className={styles.HeroSectionButton}>KNOW MORE</a>

                </div>
            </div>
        </div>
    );
}

export default Hero;