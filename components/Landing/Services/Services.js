import React from 'react'
import ServiceItem from './ServiceItem/ServiceItem'
import styles from './Services.module.scss'

const Services = () => {


    const _services = [{
        image: 'static/images/landing/services/gunmount.png',
        title: 'Defence',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        reverse: false
    },
    {
        image: 'static/images/landing/services/mixer.png',
        title: 'Consumer Electronics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        reverse: true
    },
    {
        image: 'static/images/landing/services/printer.png',
        title: 'Product Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        reverse: false
    }]

    return (
        <div className={styles.ServicesContainer}>
            <div className="container">
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


                    {
                        _services.map((item, index) => {
                            return (
                                <ServiceItem key={index} card={item} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Services
