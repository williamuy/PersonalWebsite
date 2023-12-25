import React from 'react';
import './Contact.css'; // Ensure you have this CSS file for styling

const ContactPage = () => {
  const email = 'Williu@uw.edu';
  const subject = encodeURIComponent('Inquiry from the Portfolio Website');
  const body = encodeURIComponent(`Hello William,\n\nI am reaching out to you from...\n\nBest regards,\n[Your Name]`);
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div id = 'contact'className="contact-container bg-gray-100">
      <main className="contact-content mx-auto py-8 px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="contact-subheading text-lg text-gray-600">Reach Out to Me</p>
          <h1 className="contact-heading text-5xl text-gray-800 font-bold">Let's Connect</h1>
        </div>
        <p className="contact-description">
          Feel free to reach out to me for collaborations, opportunities, or just to say hello!
        </p>
        <a href={mailtoUrl} className="contact-email-button">
          Send me an Email
        </a>
      </main>
    </div>
  );
};

export default ContactPage;
