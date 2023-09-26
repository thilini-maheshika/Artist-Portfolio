import React, { useState } from "react";
import "./contact.css";
import Facebook from "../../assets/img/facebook.png";
import Insta from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access formData here and send it to your backend or perform any other actions
    console.log("Form Data:", formData);
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h3 className="contactTitle">Contact Me</h3>
        <br />
        <span className="contactDesc">
          Feel free to reach out, collaborate, or simply share your thoughts—I
          look forward to connecting with you through the universal language of
          music.
        </span>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="name"
            placeholder="Your Name"
            value={formData.name}
          />
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="email"
            placeholder="Your Email"
            value={formData.email}
          />
          <textarea
            onChange={handleChange}
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
            value={formData.message}
          ></textarea>
          <button className="submitbtn" type="submit">
            Submit
          </button>
          <div className="links">
            <img src={Facebook} alt="Facebook" className="link" />
            <img src={Insta} alt="Instagram" className="link" />
            <img src={Twitter} alt="Twitter" className="link" />
            <img src={Youtube} alt="Youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
