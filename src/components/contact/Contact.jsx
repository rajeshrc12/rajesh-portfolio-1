import React from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {
  const sendEmail = (e) =>{
    e.preventDefault();
    Swal.fire({
      title: 'Submitting form'
    });
    Swal.showLoading();
      emailjs.sendForm("rajeshrc12", "template_hrez2wm", e.target, 'nWHe7LE5YQHkkdB12')
      .then((result) => {
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Form Submitted',
          text: 'I will get back to you soon'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Form Not Submitted',
          text: 'Sorry For that'
        })
      });
      e.target.reset();
  }
  return (
    <form onSubmit={sendEmail} name="contact" className="contact_container">
        <div className="subtitle">Contact Me</div>
        <p>you can also drop email at rajesh.charhajari@gmail.com</p>
        <input pattern='^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$' name="from_name" type="text" placeholder='Name' required/>
        <input pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" type="text" placeholder='Email' required/>
        <textarea name="message" rows="10" placeholder='Message' required></textarea>
        <button className='contact_btn'>SUBMIT</button>
    </form>
  )
}

export default Contact