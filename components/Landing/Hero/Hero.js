import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.HeroSectionContainer}>
            <div className="container">
                <div className={styles.HeroSectionWrapper} >
                    <div className={styles.HeroSectionHeading}>
                        INNOVATION STARTS WITH US
                    </div>
                    <div className={styles.HeroSectionText}>
                        <p>
                            A performance driven team of young pioneer working to solve problems in Manufacturing, Defence and Consumer Electronics.
                        </p>
                    </div>
                    <div className={styles.HeroSectionButtonWrapper}>
                        <button className={styles.HeroSectionButton}>KNOW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;