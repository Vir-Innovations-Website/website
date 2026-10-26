import React from 'react'
import ServiceItem from './ServiceItem/ServiceItem'
import styles from './Services.module.scss'

const Services = () => {


    const _services = [
    // {
    //     // image: 'static/images/landing/services/mixer.png',
    //     title: 'Consumer Electronics',
    //     description: '<span>Greatness Never Ends, but evolves.</span><br/> We are building great range of consumer products in the areas of kitchen and lifestyle. Our flagship <span>Nut-milk extractors</span> are one of the kind in the juicers and blenders segment, which can turn nuts into tasty milk.<br/> Making your health safer and kitchen smarter.',
    //     reverse: true
    // },
    {
        image: 'static/images/landing/services/printer.png',
        title: 'Product Development',
        description: 'We are a leading technological solution provider and we continuously leverage our expertise in software and hardware, to integrate our manufacturing systems with emerging technologies. By capitalizing on our expertise in mechanical design, electronic design, IoT and manufacturing, we have expanded our capabilities into wider development areas such as electric vehicles, healthcare, robotics, smart watches, industrial automation and agriculture automation; ranging from startups to multi-nationals.<br/> We strongly believe your growth is our growth. <span>Come let\'s build a smart future, together!</span>',
        reverse: false
    },
    {
        image: 'static/images/landing/services/agritech.svg',
        title: 'Agritech',
        description: 'Technology that grows with the farm. We build <span>smart, connected systems</span> for agriculture, from IoT sensors that monitor soil, water and climate to automation that reduces manual effort in the field.<br/> Helping farmers make better decisions with real-time data. From soil and crop health monitoring to smart irrigation controllers and livestock tracking, our solutions are designed to work reliably in rugged, remote conditions. <span>Higher yields, less waste and a more sustainable harvest.</span>',
        reverse: true
    },
    {
        image: 'static/images/landing/services/security.svg',
        title: 'Police & Security',
        description: 'We work with police and security agencies to build <span>reliable monitoring and surveillance solutions</span>. Our hardware and software help teams see more, respond faster and keep public spaces safer.<br/> From smart CCTV and real-time video analytics to rugged field devices and secure communication systems, we design technology that stands up to demanding, round-the-clock use. <span>Smarter policing for safer communities.</span>',
        reverse: false
    },
    {
        image: 'static/images/landing/services/research.svg',
        title: 'Research & Development',
        description: 'We partner with research organisations to turn ideas into working prototypes. With expertise in <span>electronic design, embedded systems and mechanical engineering</span>, we help R&D teams move quickly from concept to tested hardware.<br/> We support every stage of the journey, from feasibility studies and custom PCB design to rapid prototyping, testing and small-batch production. <span>Your idea, engineered into reality.</span>',
        reverse: true
    },
    {
        image: 'static/images/landing/services/universities.svg',
        title: 'Universities',
        description: 'We collaborate with universities on research projects, labs and student innovation. From <span>custom lab equipment to IoT and robotics platforms</span>, we help institutions bring hands-on technology into learning and research.<br/> We work alongside faculty and students on funded research, final-year projects and innovation labs, sharing real-world industry experience along the way. <span>Building the engineers and innovators of tomorrow.</span>',
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
