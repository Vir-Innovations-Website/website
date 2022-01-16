import React from 'react'
import ServiceItem from './ServiceItem/ServiceItem'
import styles from './Services.module.scss'

const Services = () => {


    const _services = [{
        image: 'static/images/landing/services/gunmount.png',
        title: 'Defence',
        description: 'We believe a Safe nation is a Progressive Nation.Our innovative ,Future Ready Systems are mainly used in reconnaissance, Intelligence and surveillance  applications by the forces to take a step ahead  . Our Systems are deployed at various Prestigious Defence Organisations  and borders to make us safer',
        reverse: false
    },
    {
        image: 'static/images/landing/services/mixer.png',
        title: 'Consumer Electronics',
        description: 'Greatness Never Ends but Evolves.We are building great consumer products in the area of Kitchen and Life Style .Our Flagship Nut Milk Extractors are one of the kind in Juicers and Blenders segment which can turn nuts into tasty milk .Making your health Safer and kitchen Smarter.',
        reverse: true
    },
    {
        image: 'static/images/landing/services/printer.png',
        title: 'Product Development',
        description: 'We are a  leading technological solution provider and we  continuously leverages our expertise in software and hardware to integrate our manufacturing systems with emerging technologies. By capitalising on our expertise in Mechanical Design, Electronic Design,IoT and Manufacturing we have expanded our  capabilities into the development  areas such as Electric Vehicles, Healthcare ,Robotics ,Smart Watches ,Industrial Automation and Agriculture Automation Ranging From Startups to Multi Nationals.We believe Your Growth is our Growth.Come Lets Build a Smart Future.',
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
                            The secret of change is to focus energy not on the old .But building the Future” -Socrates .We believe the change in  the future comes with right set of Expertise to make products simple,Intuitive and Smart.We want to design a bright ,safe and smarter tomorrow with our product lines.
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
