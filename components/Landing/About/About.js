import React from 'react'
import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.AboutContainer}>
            <div className="container">
                <div id='about' className={styles.AboutWrapper}>
                    <div className={styles.AboutHeadingWrapper}>
                        <p className={styles.AboutHeading}>TO <span>TRANSFORM</span> HUMANITY;</p>
                        <p className={styles.AboutHeading}>FROM FIELD TO CLASSROOM</p>
                    </div>
                    <div className={styles.AboutText}>
                        <p>We are a product development company and our objective is to create products that are innovative and can match up in the new era of accelerated technological progress.
                        </p>
                        <p>
                            Our vision is to create a better everyday life for many people, by delivering smarter alternatives  to existing devices in sectors ranging from manufacturing to consumer electronics.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
