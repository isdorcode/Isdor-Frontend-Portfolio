import React from 'react';
import moon from '../images/Image 45gff.png';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p className='reach'>Reach out, and let's create a universe of possibilities together!</p>
      
      <div className="contact-info">
        <div className="contact-text">
          <h4>Let's Connect Constellations</h4>
          <p>Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
          
          <form>
            <div className="name-fields">
              <input type="text" name="lastName" placeholder="Last Name" required />
              <input type="text" name="firstName" placeholder="First Name" required />
            </div>
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Message" rows="3" required></textarea>
            <button type="submit">Send to the Moon</button>
          </form>
        </div>
        
        <div className="image">
          <div className="image-text">
            <p>"Two lunar months revealed Earth's fragile beauty against vast silence, transforming my view of our place in the universe.</p>
            <span>Irinel Traista</span>
          </div>
          <img src={moon} alt="Moon Illustration" className='moon-pic' />
        </div>
      </div>
    </div>
  );
}

export default Contact;