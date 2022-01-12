import React from 'react'
import styles from './Services.module.scss'

function Services() {
    return (
        <div id='services' className={styles.ServicesWrapper}>
            <div className={styles.ServicesHeadingWrapper}>
                <p>DESIGNING FOR A </p>
                <p className={styles.HeadingPart}><span>SMARTER</span> TOMORROW</p>
            </div>
            <div className={styles.ServicesMainText}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div className={styles.ServicesDefenceWrapper}>
                <img 
                src="static/images/gunmount.png" 
                alt="GUNMOUNT"
                className={styles.DefenceImg}
                />
                <div className={styles.DefenceHeadingAndText}>
                    <h1 className={styles.DefenceHeading}>DEFENCE</h1>
                    <p className={styles.DefenceText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>

            <div className={styles.DefenceConsumerWrapper}>
                <div className={styles.ConsumerHeadingAndText}>
                    <h1 className={styles.ConsumerHeading}>
                        CONSUMER ELECTRONICS
                    </h1>
                    <p className={styles.ConsumerText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className={styles.ConsumerImgWrapper}>
                    <img src="static/images/mixer.png"/>
                </div>
            </div>
            <div className={styles.ServicesProductWrapper}>
                    <div className={styles.ProductImg}>
                        <img src="static/images/ProductInServices.png"/>
                    </div>
                    <div className={styles.ProductHeadingAndText}>
                        <h1 className={styles.ProductHeading}>
                        PRODUCT DEVELOPMENT
                        </h1>
                        <p className={styles.ProductText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Services
