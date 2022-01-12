import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection = () =>{
    return(
        <div className={styles.HeroSectionContainer}>
            <div className="container">
                <div className={styles.HeroSectionWrapper} >
                    <div className={styles.HeroSectionHeading}>
                        <strong>INNOVATION</strong>
                        <p>STARTS WITH US</p>
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

export default HeroSection;