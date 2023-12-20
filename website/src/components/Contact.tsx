import React from 'react';
import './animations.css'; // Importing the animations styles

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 slide-in-left">Contact</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" className="contact-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          {/* Repeat for other fields like email, message, etc. */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
