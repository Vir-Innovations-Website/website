import React from 'react'
import styles from './Clientele.module.scss'

function Clientele() {
    return (
        <div className={styles.ClienteleContainer}>
            <div className="container">
            <div id='clientele' className={styles.ClienteleWrapper}>
            <h1 className={styles.ClienteleHeading}>
                WE ARE CONTENTED TO <span>WORK</span> WITH 
            </h1>
            <div className={styles.ClienteleImagesContainer}>
                <img 
                src="static/images/Titan.png"
                alt="Titan"
                className={styles.Img}/>
                <img 
                src="static/images/Indian Army.png"
                alt="Indian Army"
                className={styles.Img}/>
                <img 
                src="static/images/TataSteel.png"
                alt="Tata Steel"
                className={styles.Img}/>
                <img 
                src="static/images/DroneGuru.png"
                alt="DroneGuru"
                className={styles.Img}/>
                <img 
                src="static/images/Labs.png"
                alt="Labs"
                className={styles.Img}/>
            </div>
            <div className={styles.ClienteleClosing}></div>
        </div>
            </div>
        </div>
    )
}

export default Clientele
