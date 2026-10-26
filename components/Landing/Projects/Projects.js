import React from 'react'
import { convertToHtml } from '../../../helpers'
import styles from './Projects.module.scss'

const Projects = () => {

    const _projects = [{
        image: 'static/images/landing/projects/ugv.jpg',
        title: 'UGV',
        description: 'Unmanned Ground Vehicles built for rough terrain and remote operation. Our rugged platforms carry cameras and sensors for <span>inspection, mapping and site monitoring</span>, with long-range wireless control and real-time video feedback.<br/> Modular payload bays let the same platform carry thermal cameras, LiDAR, gas sensors or robotic manipulators. Battery-powered drive systems deliver quiet operation and extended run-times, while optional GPS waypoint navigation enables semi-autonomous operation along planned routes. Ideal for agriculture, industrial inspection, disaster response and research. <span>Going where people can\'t, so they don\'t have to.</span>'
    },
    {
        image: 'static/images/landing/projects/robotic-arm.jpg',
        title: 'Robotic Arm',
        description: 'Multi-axis robotic arms for <span>pick-and-place, assembly and lab automation</span>. Designed in-house from mechanics to motor control, with precise, repeatable motion and easy integration into production lines and research setups.<br/> Our arms support custom end-effectors such as grippers, suction cups and tool heads, and can be programmed through simple software interfaces or teach-by-demonstration. Vision integration allows them to detect, sort and handle objects automatically. Compact, affordable and ideal for small factories, labs and engineering education. <span>Precision automation, made accessible.</span>'
    },
    {
        image: 'static/images/landing/projects/smart-iot.jpg',
        title: 'Smart IoT',
        description: 'Connected devices that sense, communicate and act. From custom sensor nodes and gateways to <span>cloud dashboards and mobile apps</span>, we build end-to-end IoT systems for homes, farms, factories and campuses.<br/> Our solutions cover low-power wireless networks like LoRa, Wi-Fi and BLE, secure device provisioning, over-the-air firmware updates and real-time alerts. Applications include energy monitoring, asset tracking, smart irrigation, environmental sensing and building automation. Every system is designed to scale from a handful of devices to thousands. <span>Data that drives smarter decisions.</span>'
    },
    {
        image: 'static/images/landing/projects/pan-tilt.jpg',
        title: 'Pan & Tilt Systems',
        description: 'Motorised pan and tilt units for cameras and sensors, delivering <span>smooth, accurate 360° positioning</span>. Built for surveillance, tracking and imaging applications, with remote control and support for a wide range of payloads.<br/> High-torque motors with precise feedback provide stable, vibration-free movement, while weatherproof enclosures keep them running outdoors in all conditions. Units support preset positions, automated patrol patterns and object tracking, and integrate easily with existing control software through standard protocols. <span>Steady, precise and always on target.</span>'
    }]

    return (
        <div className={styles.ProjectsContainer}>
            <div className="container">
                <div id='projects' className={styles.ProjectsWrapper}>
                    <div className={styles.ProjectsHeadingWrapper}>
                        <p>OUR <span>PROJECTS</span></p>
                    </div>
                    <div className={styles.ProjectsMainText}>
                        <p>From rugged ground robots to connected sensors, here are some of the systems we have designed and built.</p>
                    </div>

                    <div className={styles.ProjectsGrid}>
                        {
                            _projects.map((item, index) => {
                                return (
                                    <div key={index} className={styles.ProjectCard}>
                                        <img src={item.image} alt={item.title} />
                                        <div className={styles.Title}>{item.title}</div>
                                        <div className={styles.Description} dangerouslySetInnerHTML={convertToHtml(item.description)}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
