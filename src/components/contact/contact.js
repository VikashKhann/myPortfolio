import React, { useRef } from "react";
import "./contact.css";
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nwoyboj",
        "template_qjwq5bv",
        form.current,
        "LogEJH-YwFLvibRV_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppurtunity
        </span>
        <form ref={form} onSubmit={sendEmail} action="" className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={facebookIcon} alt="Facebook" className="link" />
            <img src={instagramIcon} alt="Instagram" className="link" />
            <img src={twitterIcon} alt="Twitter" className="link" />
            <img src={youtubeIcon} alt="Youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
