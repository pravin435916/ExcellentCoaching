import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Tuton Classes</h2>
          <p className="text-sm">Providing quality education since 2005.</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">123 Education Avenue, Cityville</p>
          <p className="text-sm">Email: info@tutonclasses.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>
        <div className="w-full mt-4">
          <p className="text-sm text-center">&copy; {new Date().getFullYear()} Tuton Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
