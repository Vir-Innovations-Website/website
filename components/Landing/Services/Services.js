import React from 'react'
import ServiceItem from './ServiceItem/ServiceItem'
import styles from './Services.module.scss'

const Services = () => {


    const _services = [{
        image: 'static/images/landing/services/gunmount.png',
        title: 'Defence',
        description: 'We believe a Safe nation is a Progressive Nation. Our innovative, <span>Future Ready Systems</span> are mainly used in reconnaissance, Intelligence, and surveillance applications by the forces to take a step ahead. Our systems are deployed at various Prestigious Defence Organisations and borders to make us safer.',
        reverse: false
    },
    {
        // image: 'static/images/landing/services/mixer.png',
        title: 'Consumer Electronics',
        description: '<span>Greatness Never Ends, but evolves.</span><br/> We are building great range of consumer products in the areas of kitchen and lifestyle. Our flagship <span>Nut-milk extractors</span> are one of the kind in the juicers and blenders segment, which can turn nuts into tasty milk.<br/> Making your health safer and kitchen smarter.',
        reverse: true
    },
    {
        image: 'static/images/landing/services/printer.png',
        title: 'Product Development',
        description: 'We are a leading technological solution provider and we continuously leverage our expertise in software and hardware, to integrate our manufacturing systems with emerging technologies. By capitalizing on our expertise in mechanical design, electronic design, IoT and manufacturing, we have expanded our capabilities into wider development areas such as electric vehicles, healthcare, robotics, smart watches, industrial automation and agriculture automation; ranging from startups to multi-nationals.<br/> We strongly believe your growth is our growth. <span>Come let\'s build a smart future, together!</span>',
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
                            <span>
                                “The secret of change is to focus energy, not on the old. But building the Future”
                            </span> Socrates.
                        </p>
                        <p>
                            We believe, the change in the future comes with the right set of expertise to make products simple, intuitive and smart.
                            We want to design a bright, safe, and smarter tomorrow with our product lines.
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
