import React from 'react';
import styles from './About.module.scss';

const About = () =>{
    return(
        <div className={styles.aboutWrapper} >
            <div className={styles.aboutHeading}>
                <strong>INNOVATION</strong>
                <p>STARTS WITH US</p>
            </div>
            <div className={styles.aboutText}>
                <p>
                A performance driven team of young pioneer working to solve problems in Manufacturing, Defence and Consumer Electronics.
                </p>
            </div>
            <div className={styles.aboutButtonWrapper}>
                <button className={styles.aboutButton}>KNOW MORE</button>
            </div>
        </div>
    );
}

export default About;