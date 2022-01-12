import React from 'react'
import styles from './ContactUs.module.scss'

function ContactUs() {
    return (
        <div className={styles.ContactUsContainer}>
            <div className="container">
            <div id='contact-us' className={styles.ContactUsWrapper}>
            <div className={styles.ContactUsFormContainer}>
                <p className={styles.FormHeading}>
                    Hello ! Let’s get in touch.
                </p>
                <div className={styles.ContactUsForm}>
                    <div className={styles.FormName}>
                        <p>Name</p>
                        <input 
                        type="text" 
                        placeholder="Enter Name"/>
                        <div></div>
                    </div>
                    <div className={styles.FormEmail}>
                        <p>Email Id</p>
                        <input 
                        type="text" 
                        placeholder="Enter email address"/>
                        <div></div>
                    </div>
                    <div className={styles.FormContact}>
                        <p>Contact Number</p>
                        <input type="text" 
                        placeholder="Enter contact number"/>
                        <div></div>
                    </div>
                    <div className={styles.FormMessege}>
                        <p>Messege</p>
                        <input 
                        type="text" 
                        placeholder="Enter your messege"/>
                        <div></div>
                    </div>
                    <div className={styles.FormButton}>
                        <button className={styles.button}>
                            SEND MESSEGE
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.InformationContainer}>
                <h5>Connect with us</h5>
                <img src="static/images/Linkdin.png"/>
                <h5>Reach us</h5>
                <p>Vir Innovations,<br></br>
                    Plot No. 8-2-438/7, V V S Crest, <br></br>
                    Road No. 4, Banjara hills,<br></br>
                    Hyderabad, Telangana, 500034
                </p>
                <h5>Support</h5>
                <p>info@virinnovations.in</p>

                <div className={styles.Pdf}>
                    <p>Privacy Policy</p>
                    <p className={styles.terms}>Terms of Service</p>
                </div>

                <div className={styles.copyright}>
                    <img src="static/images/copyright icon.png"/>
                    <p>Vir innovations Pvt. Ltd.</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default ContactUs
