import './Contact.css'
import Logo1 from '../../assets/educ8africa.png';
import Logo2 from '../../assets/microsoft.jpg';
import Logo3 from '../../assets/Adobe.png';
import Logo4 from '../../assets/Facebook.png';

import link1 from "../../assets/link1.png";
import link2 from "../../assets/link2.png";
import link3 from "../../assets/link3.png";
import link4 from "../../assets/link4.png";

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';




/* To be done latter */
/*Import clients from "../../assets/ the name of your icons here" */

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sdi3mrd', 'template_zruaslq', form.current, 'oAuFNP2yV9_cnxqO7')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email successfully sent');
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>
                I have ahd the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={Logo1} alt='' className='clientImg'/>
                <img src={Logo2} alt='' className='clientImg'/>
                <img src={Logo3} alt='' className='clientImg'/>
                <img src={Logo4} alt='' className='clientImg'/>
            </div>

        </div>

        <div id='contact'>
            <h1 className='contactPageTitle'>Conatact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'  ref={form}  onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name'name='your_name' />
                <input type="email" className='email' placeholder='Your Email' name='your_email' />
                <textarea className='msg' rows="5" placeholder='Your message'name='message'></textarea>
                <button type="submit" value="send" className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={link1} alt="Client" className='link'/>
                    <img src={link2} alt="Client" className='link'/>
                    <img src={link3} alt="Client" className='link'/>
                    <img src={link4} alt="Client" className='link'/>
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact