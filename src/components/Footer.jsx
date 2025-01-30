import { FaFacebookF, FaGithub, FaTwitter, FaDribbble, FaDiscord,FaInstagram, FaLinkedin } from 'react-icons/fa';
import React, { useState } from 'react';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold">Web Atlantis</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Services</h2>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#" className="hover:underline">Web Development</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">UI/UX Design</a></li>
                <li><a href="#" className="hover:underline">Backend Solutions</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Company</h2>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#hero" className="hover:underline">About Us</a></li>
                <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
           
              </ul>
            </div>
            <div>
             
              <ul className="text-gray-400">
         
               
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <span className="text-sm text-gray-400">© {new Date().getFullYear()} Web Atlantis. All Rights Reserved.</span>
          <div className="flex mt-4 sm:mt-0">
      
        
            {/* <a href="#" className="text-gray-400 hover:text-white mx-2"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white mx-2"><FaLinkedin /></a>
    
   
            <a href="#" className="text-gray-400 hover:text-white mx-2"><FaInstagram /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
