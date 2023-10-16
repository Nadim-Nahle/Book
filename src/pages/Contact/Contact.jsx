import React, { useRef } from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar"
import emailjs from '@emailjs/browser';

// npm i @emailjs/browser

const ContactForm = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iv4tcob', 'template_08o8yfi', form.current, 'tL6sKd8DVGyIeSbAS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Navbar ></Navbar>
            <section className="contact-us" id="contact-section">
                <div className="left">
                    <div className="info"><div className="title">Name: </div>Dr. Soha Yaghi (She/her)</div>
                    <div className="info"><div className="title">linkdin: </div>   <a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/soha-yaghi-phd">soha-yaghi-phd</a></div>
                    <div className="info"><div className="title">Email: </div>s.yaghi@sohaliteraryartsagency.com</div>
                    <div className="info"><div className="title">Address1: </div>Liban, Beirut, Achrafieh, Sassine Square</div>
                    <div className="info"><div className="title">Address2: </div>France, Paris, 9 Rue des Colonnes, 75002</div>
                </div>
                <div className="right">
                <form id="contact" ref={form} onSubmit={sendEmail}>

                    <div className="section-heading">
                        <h4>Contact us</h4>
                    </div>
                    <div className="inputField">
                        <input type="name" name="from_name" id="name" placeholder="Your name" autoComplete="on" required />
                        <span className="valid_info_name"></span>
                    </div>

                    <div className="inputField">
                        <input type="Email" name="from_email" id="email" placeholder="Your email" required="" />
                        <span className="valid_info_email"></span>
                    </div>

                    <div className="inputField">
                        <textarea name="message" id="message" placeholder="Your message"></textarea>
                        <span className="valid_info_message"></span>
                    </div>

                    <div className="inputField btn">
                        <button type="submit" id="form-submit" className="main-gradient-button">Send a message</button>
                    </div>
                </form></div>
            </section>
        </>
    )
};

export default ContactForm;

