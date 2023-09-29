import React, { useState } from 'react';
import './Contact_Us.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const Contact_Us = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        subject: "",
        message: ""
    });

    const submitForm = (e) => {
        e.preventDefault();
    //   if(!formData.email || !formData.firstname || !formData.lastname) {
    //     alert("all fields are required")
    //   }
        

        fetch('http://127.0.0.1:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message)
            console.log(data.body);
            setFormData({
                firstname: "",
                lastname: "",
                mobile: "",
                email: "",
                subject: "",
                message: ""
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <main>
            <h1>Get In Touch</h1>
                <div className='Title'>
                    <p>We're here to answer any questions or comments you may have!</p>
                            <p>Fill out our contact form and we will get back to you in 24 hours or less.
                            </p>
                            <p>If you have any questions, please reach out to us on&nbsp;
                            <a href="tel:+254 716 598 944." rel='norelferrer' title="Call or WhatsApp" className="js-no-transition">+254 716 598 944</a>&nbsp;
                            </p>
                            <p>Or email us at&nbsp;
                                <a href="mailto:c.ustom.gifts.us@gmail.com" rel='norelferrer' title="Email Us" className="js-no-transition">c.ustom.gifts.us@gmail.com</a>
                                </p>
                </div>&nbsp;
            </main>
            <div className="container">
                <form method='post' name="contactForm" onSubmit={submitForm}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" value={formData.firstname}  name="firstname" onChange={handleChange} placeholder="Your First name.." required />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Your last name.." required />

                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Your mobile number.." required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email.." required />

                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject}autoComplete="off" onChange={handleChange} placeholder="Subject.." required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write something.." required ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="social-icons">
                <a href="https://web.facebook.com/profile.php?id=100070567733286" target="_blank" rel="noreferrer"><img src={facebook} title='Facebook' alt=''/></a>
                <a href="https://www.instagram.com/c.ustom_gifts/" target="_blank" rel="noreferrer"><img src={instagram} title='Instagram' alt=''/></a>
            </div>
        </>
    )
}

export default Contact_Us;
