import React, { useState } from 'react';
import './Contact.css'; // Ensure you create this CSS file for contact form-specific styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoLink = `mailto:test@example.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name} %3C${formData.email}%3E`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gray-100 py-8">
      <main id="contact" className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Get in Touch</p>
          <h1 className="text-5xl text-gray-800 font-bold">Contact Me</h1>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <label htmlFor="name" className="text-gray-600">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 text-gray-800 bg-white rounded shadow"
          />
          <label htmlFor="email" className="text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 text-gray-800 bg-white rounded shadow"
          />
          <label htmlFor="message" className="text-gray-600">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 h-32 text-gray-800 bg-white rounded shadow"
          ></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactForm;
