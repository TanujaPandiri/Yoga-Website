import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>📍 Yoga Studio, Hyderabad, Telangana</p>
      <p>📞 +91-9876543210</p>
      <p>📧 yogastudio@email.com</p>
      <p>Follow us on <a href="#">Instagram</a>, <a href="#">Facebook</a></p>
      <iframe
        className="map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        allowFullScreen=""
        loading="lazy"
        title="Studio Location"
      ></iframe>
    </div>
  );
}

export default Contact;