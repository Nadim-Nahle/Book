import React from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom";

// npm i @emailjs/browser

const ContactForm = () => {

    return (
        <>
            <Navbar ></Navbar>
            <section class="contact-us" id="contact-section">
                <div className="left">
                    <div className="info"><div className="title">Name: </div>Dr. Soha Yaghi (She/her)</div>
                    <div className="info"><div className="title">linkdin: </div>   <a target="_blank" href="http://www.linkedin.com/in/soha-yaghi-phd-98828722b">soha-yaghi-phd</a></div>
                    <div className="info"><div className="title">Address1: </div>Liban, Beirut, Achrafieh, Sassine Square</div>
                    <div className="info"><div className="title">Address2: </div>France, Paris, 9 Rue des Colonnes, 75002</div>
                </div>
                <div className="right"><form id="contact" action="" method="post">

                    <div class="section-heading">
                        <h4>Contact us</h4>
                    </div>

                    <div class="inputField">
                        <input type="name" name="name" id="name" placeholder="Your name" autocomplete="on" required />
                        <span class="valid_info_name"></span>
                    </div>

                    <div class="inputField">
                        <input type="Email" name="email" id="email" placeholder="Your email" required="" />
                        <span class="valid_info_email"></span>
                    </div>

                    <div class="inputField">
                        <textarea name="message" id="message" placeholder="Your message"></textarea>
                        <span class="valid_info_message"></span>
                    </div>

                    <div class="inputField btn">
                        <button type="submit" id="form-submit" class="main-gradient-button" disabled>Send a message</button>
                    </div>

                </form></div>
            </section>
        </>
    )
};

export default ContactForm;

