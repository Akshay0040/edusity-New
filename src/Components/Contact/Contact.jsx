import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-call">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact from or find our contact information below. Your feedback, questions, and suggestions are important to us as we steive to provide exceptional service to our university community.</p>
        <ul>
          <li>Contact@abc.dev</li>
          <li>+1 1234569874</li>
          <li>77 Massachusetts Ave, Cambridge <br /> MA 02136, United States</li>
        </ul>
      </div>
      <div className="contact-call"></div>
    </div>
  )
}

export default Contact
