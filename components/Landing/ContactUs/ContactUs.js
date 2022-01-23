import { React, useState, useEffect } from 'react'
import styles from './ContactUs.module.scss'
import axios from 'axios'
import Link from 'next/link'

function ContactUs() {
    const validateData = {
        name: "",
        contact: "",
        email: "",
        messege: "",
    };
    const [data, setData] = useState(validateData);
    const [Errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false)

    const validateForm = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const regexNum = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        if (!values.name) {
            errors.name = "*Name is required!"
        }
        if (!values.email) {
            errors.email = "*Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "*Email is not valid!"
        }
        if (!values.contact) {
            errors.contact = "*Contact number is required!"
        } else if (!regexNum.test(values.contact)) {
            errors.contact = "*Contact number is not valid!"
        }
        if (!values.messege) {
            errors.messege = "*Message is required!"
        }
        return errors;
    }

    useEffect(() => {
        if (Object.keys(Errors).length == 0 && isSubmit) {
            console.log(Errors)
        }
    }, [Errors])
    const submitForm = (e) => {
        e.preventDefault()
        validateForm(data);
        setErrors(validateForm(data));
        setIsSubmit(true);


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
            console.log(res);
            setSuccess(true)
            setData(validateData);
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
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
                <p className={styles.FormHeading}>
                    Hello ! Let’s get in touch.
                </p>
                <div id='contact-us' className={styles.ContactUsWrapper}>
                    <div className={styles.ContactUsFormContainer}>
                        <div className={styles.ContactUsForm}>
                            <div className={styles.FormName}>
                                <div>
                                    <p>Name</p>
                                    <span>{Errors.name}</span>
                                </div>
                                <input
                                    onChange={(e) => SendData(e)}
                                    id="name"
                                    value={data.name}
                                    type="text"
                                    placeholder="Enter Name" />
                                <div className="border"></div>
                            </div>
                            <div className={styles.FormEmail}>
                                <div>
                                    <p>Email</p>
                                    <span>{Errors.email}</span>
                                </div>
                                <input
                                    type="text"
                                    onChange={(e) => SendData(e)}
                                    id="email"
                                    value={data.email}
                                    placeholder="Enter email address" />
                                <div className="border"></div>
                            </div>
                            <div className={styles.FormContact}>
                                <div>
                                    <p>Contact number</p>
                                    <span>{Errors.contact}</span>
                                </div>
                                <input type="text"
                                    onChange={(e) => SendData(e)}
                                    id="contact"
                                    value={data.contact}
                                    placeholder="Enter contact number" />
                                <div className="border"></div>
                            </div>
                            <div className={styles.FormMessege}>
                                <div>
                                    <p>Messege</p>
                                    <span>{Errors.messege}</span>
                                </div>
                                <input
                                    type="text"
                                    onChange={(e) => SendData(e)}
                                    id="messege"
                                    value={data.messege}
                                    placeholder="Enter your messege" />
                                <div className="border"></div>
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
                            {success && <div className={styles.SendMessage}>Successully sent you message </div>}

                        </div>
                    </div>

                    <div className={styles.InformationContainer}>
                        <h5>Connect with us</h5>
                        <a href='https://www.linkedin.com/company/virinnovations'>
                            <img src="static/images/Linkdin.png" />
                        </a>
                        <h5>Reach us</h5>
                        <p>Vir Innovations,<br></br>
                            Plot No. 8-2-438/7, V V S Crest, <br></br>
                            Road No. 4, Banjara hills,<br></br>
                            Hyderabad, Telangana, 500034
                        </p>
                        <h5>Support</h5>
                        <p>info@virinnovations.in</p>

                        <Link href={'/privacy-policy'} className="link">
                            <p className={styles.privacyPolicy}>
                                Privacy Policy
                            </p>
                        </Link>

                        <div className={styles.copyright}>
                            <p>&copy; Vir innovations Pvt. Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
