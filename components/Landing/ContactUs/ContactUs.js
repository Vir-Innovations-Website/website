import { React, useState } from 'react'
import styles from './ContactUs.module.scss'
import axios from 'axios'
import Link from 'next/link'

function ContactUs() {

    const [data, setData] = useState(
        {
            name: "",
            contact: "",
            email: "",
            messege: "",
        }
    )

    const [success, setSuccess] = useState(false)


    const submitForm = (e) => {
        e.preventDefault();

        let _data = {
            "fields": {
                "Name": data.name,
                "Email": data.email,
                "Contact Number": data.contact,
                "Message": data.messege
            }
        }

        const headers = {
            "Authorization": "Bearer keyXUQGxlWwBasYQX",
            "Content-Type": "application/json"
        }

        axios.post(`https://api.airtable.com/v0/appx3UnnbNahdeqgT/contact_form`, _data, { headers }).then((res) => {
            setSuccess(true);
            console.log(res);
        }).catch((err) => {
            console.log(err)
        })
    }
    const SendData = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);
    }
    return (
        <div className={styles.ContactUsContainer}>
            <div className="container">
                <div id='contact-us' className={styles.ContactUsWrapper}>
                    <div className={styles.ContactUsFormContainer}>
                        <p className={styles.FormHeading}>
                            Hello ! Let’s get in touch.
                        </p>
                        <div className={styles.ContactUsForm}>
                            <form className={styles.FormName}>
                                <p>Name</p>
                                <input
                                    onChange={(e) => SendData(e)}
                                    id="name"
                                    value={data.name}
                                    type="text"
                                    placeholder="Enter Name" />
                                <div></div>
                            </form>
                            <div className={styles.FormEmail}>
                                <p>Email Id</p>
                                <input
                                    type="text"
                                    onChange={(e) => SendData(e)}
                                    id="email"
                                    value={data.email}
                                    placeholder="Enter email address" />
                                <div></div>
                            </div>
                            <div className={styles.FormContact}>
                                <p>Contact Number</p>
                                <input type="text"
                                    onChange={(e) => SendData(e)}
                                    id="contact"
                                    value={data.contact}
                                    placeholder="Enter contact number" />
                                <div></div>
                            </div>
                            <div className={styles.FormMessege}>
                                <p>Messege</p>
                                <input
                                    type="text"
                                    onChange={(e) => SendData(e)}
                                    id="messege"
                                    value={data.messege}
                                    placeholder="Enter your messege" />
                                <div></div>
                            </div>
                            <div className={styles.FormButton}>
                                <button
                                    onClick={(e) => {
                                        submitForm(e);
                                    }}
                                    className={styles.button}>
                                    SEND MESSEGE
                                </button>
                            </div>

                            {success && <div className={styles.SendMesage}> Successully sent you message </div>}
                        </div>
                    </div>

                    <div className={styles.InformationContainer}>
                        <h5>Connect with us</h5>
                        <img src="static/images/Linkdin.png" />
                        <h5>Reach us</h5>
                        <p>Vir Innovations,<br></br>
                            Plot No. 8-2-438/7, V V S Crest, <br></br>
                            Road No. 4, Banjara hills,<br></br>
                            Hyderabad, Telangana, 500034
                        </p>
                        <h5>Support</h5>
                        <p>info@virinnovations.in</p>

                        <ul className={styles.OtherLinks}>
                            <li><Link href={'/privacy-policy'}>
                                <li>Privacy Policy</li>
                            </Link></li>
                            <li><Link href={'/terms-of-service'}>
                                <li>Privacy Policy</li>
                            </Link></li>
                        </ul>

                        <div className={styles.copyright}>
                            <img src="static/images/copyright icon.png" />
                            <p>Vir innovations Pvt. Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
