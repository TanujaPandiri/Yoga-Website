import React from 'react';

const services = [
  {
    title: 'Hatha Yoga',
    description: 'Gentle introduction to yoga with basic poses and breathing.',
    pricing: '₹300 per session'
  },
  {
    title: 'Vinyasa Flow',
    description: 'Dynamic flow of poses synchronized with breath.',
    pricing: '₹350 per session'
  },
  {
    title: 'Meditation Sessions',
    description: 'Mindfulness and breathing techniques for mental clarity.',
    pricing: '₹200 per session'
  },
  {
    title: 'Online/Offline Classes',
    description: 'Flexible class formats to suit your schedule.',
    pricing: '₹250 per session'
  },
  {
    title: 'Workshops & Coaching',
    description: 'Personalized yoga workshops and coaching programs.',
    pricing: '₹500 per workshop'
  }
];

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p><strong>{service.pricing}</strong></p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
      <h3>📞 AI-Based Voice Call Booking (Coming Soon)</h3>
      <p>Call our dedicated line, select your language (English, Hindi, Telugu), and let our AI assistant book your session over voice or SMS!</p>
    </div>
  );
}

export default Services;