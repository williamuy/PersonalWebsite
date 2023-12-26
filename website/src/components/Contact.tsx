import React from 'react';
import './Contact.css'; // Importing the CSS file for styling

/**
 * ContactPage component for the website.
 * It contains a pre-filled mailto link for users to send an email.
 * 
 * @returns JSX.Element The ContactPage component as a JSX Element.
 */
const ContactPage = () => {
  // Define the email address to be used in the mailto link
  const email = 'Williu@uw.edu';

  // Define the subject of the email, and encode it for use in a URL
  const subject = encodeURIComponent('Inquiry from the Portfolio Website');

  // Define the body of the email, and encode it for use in a URL
  const body = encodeURIComponent(`Hello William,\n\nI am reaching out to you from...\n\nBest regards,\n[Your Name]`);

  // Construct the mailto link with the email, subject, and body
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  // Render the ContactPage component
  return (
    <div id='contact' className="contact-container bg-gray-100">
      <main className="contact-content mx-auto py-8 px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="contact-subheading text-lg text-gray-600">Reach Out to Me</p>
          <h1 className="contact-heading text-5xl text-gray-800 font-bold">Let's Connect</h1>
        </div>
        <p className="contact-description">
          Feel free to reach out to me for collaborations, opportunities, or just to say hello!
        </p>
        {/* This is the mailto link that will open the user's default email client with a new email pre-filled with the subject and body */}
        <a href={mailtoUrl} className="contact-email-button">
          Send me an Email
        </a>
      </main>
    </div>
  );
};

// Export the ContactPage component as the default export
export default ContactPage;