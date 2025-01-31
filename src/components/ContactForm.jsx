import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageStatus('');

    emailjs
      .sendForm(
        'service_woj0ubc',  // Your service ID (replace with the actual one)
        'template_nt9lksk',  // Your template ID (replace with the actual one)
        form.current,        // The form element reference
        {
          publicKey: 'CMKpsSU4ycQCPoczi',  // Your public key (replace with the actual one)
        }
      )
      .then(
        () => {
          setIsLoading(false);
          setMessageStatus('Ww will get back to you shortly!');
          form.current.reset();  // Reset the form after sending
        },
        (error) => {
          setIsLoading(false);
          setMessageStatus(`Failed to send: ${error.text}`);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-8">
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8" id="contact">
        
        {/* Left Section: Contact Details */}
        <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg flex flex-col items-start space-y-6">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Contact Information</h2>
          <p className="mt-3 text-gray-500">Our friendly team is always here to help you.</p>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <svg
              className="shrink-0 mr-6 text-2xl text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
              />
            </svg>
            <a href="mailto:support@webatlantis.in" className="text-lg font-medium text-black hover:text-blue-600">
              support@webatlantis.in
            </a>
          </div>
          
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <a href="tel:+919876543210" className="text-lg font-medium text-black hover:text-blue-600">
              +91 93056 50955
            </a>
          </div>
          
          {/* Address */}
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-lg font-medium text-black">Manish Gupta, Akshaya, RVITM, Bengaluru-560068</span>
          </div>
        </div>
        
        {/* Right Section: Form */}
        <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Get in Touch</h2>
          
         <form ref={form} onSubmit={sendEmail} className="space-y-6">
  {/* Name Input */}
  <div>
    <label htmlFor="user_name" className="block text-lg font-medium text-black mb-2">
      Name
    </label>
    <input
      type="text"
      name="user_name"  
      id="user_name"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>

  {/* Email Input */}
  <div>
    <label htmlFor="user_email" className="block text-lg font-medium text-black mb-2">
      Email
    </label>
    <input
      type="email"
      name="user_email"
      id="user_email"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>

  {/* Phone Number Input */}
  <div>
    <label htmlFor="user_phone" className="block text-lg font-medium text-black mb-2">
      Phone Number
    </label>
    <input
      type="tel"
      name="user_phone"
      id="user_phone"
      required
      pattern="[0-9]{10}"  // Ensures a 10-digit phone number
      placeholder="Enter 10-digit phone number"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>

  {/* Message Textarea */}
  <div>
    <label htmlFor="message" className="block text-lg font-medium text-black mb-2">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      required
      rows="4"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    ></textarea>
  </div>

  {/* Submit Button */}
  <div>
    <button
      type="submit"
      className="w-full py-3 px-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
      disabled={isLoading}
    >
      {isLoading ? 'Sending...' : 'Send Message'}
    </button>
  </div>
</form>


          {/* Message Status */}
          {messageStatus && (
            <div
              className={`mt-4 text-center font-semibold ${
                messageStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {messageStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
