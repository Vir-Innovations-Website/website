import React from "react";
import styles from "./Clientele.module.scss";

function Clientele() {
  return (
    <>
      <div className={styles.ClienteleContainer}>
        <div className="container">
          <div id="clientele" className={styles.ClienteleWrapper}>
            <h1 className={styles.ClienteleHeading}>
              WE ARE CONTENTED TO <span>WORK</span> WITH
            </h1>
            <div className={styles.ClienteleImagesContainer}>
              <img
                src="static/images/Titan.png"
                alt="Titan"
                className={styles.Img}
              />
              <img
                src="static/images/TataSteel.png"
                alt="Tata Steel"
                className={styles.Img}
              />
              <img
                src="static/images/DroneGuru.png"
                alt="DroneGuru"
                className={styles.Img}
              />
              <img
                src="static/images/Labs.png"
                alt="Labs"
                className={styles.Img}
              />
              <img
                src="static/images/aidin-logo.png"
                alt="Labs"
                className={styles.Img}
              />
              <img
                src="static/images/ts-govt.png"
                alt="Labs"
                className={styles.Img}
              />
              <img
                src="static/images/cdac-logo.png"
                alt="Labs"
                className={styles.Img}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ClienteleContainer2}>
        <div className={styles.ClienteleSeparater}></div>
      </div>
    </>
  );
}

export default Clientele;
