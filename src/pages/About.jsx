import React from 'react';

function About() {
  return (
    <div className="about">
      <h2>About Our Studio</h2>
      <p>Our yoga studio was founded with the mission to spread peace, balance, and wellness.</p>
      <h3>Our Mission</h3>
      <p>We are dedicated to helping people improve their mental and physical well-being through yoga.</p>
      <h3>Meet Our Instructors</h3>
      <div className="instructors">
        <div className="instructor">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Instructor 1" />
          <p>Priya Sharma - Hatha Yoga Expert</p>
        </div>
        <div className="instructor">
          <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Instructor 2" />
          <p>Rahul Mehta - Vinyasa Flow Instructor</p>
        </div>
      </div>
    </div>
  );
}

export default About;