import React from 'react';
import "./contact.css";
import Facebook from '../../assets/img/facebook.png';
import Insta from '../../assets/img/instagram.png';
import Twitter from '../../assets/img/twitter.png';
import Youtube from '../../assets/img/youtube.png';

function contact() {
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h3 className="contactTitle">Contact Me</h3><br /> 
            <span className='contactDesc'>Feel free to reach out, collaborate, or simply share your thoughts—I look forward to connecting with you through the universal language of music.</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea name='message' rows="5" placeholder='Your Message' className='msg'></textarea>
                <button className='submitbtn' type='submit' value="send">Submit</button>
                <div className='links'>
                    <img src={Facebook} alt='Facebook' className='link' />
                    <img src={Insta} alt='Instagram' className='link' />
                    <img src={Twitter} alt='Twitter' className='link' />
                    <img src={Youtube} alt='Youtube' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default contact
