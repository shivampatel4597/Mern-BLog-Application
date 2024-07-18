import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto ">
                <div className="flex flex-wrap justify-between px-4 ">
                    {/* Logo and Description */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">Your Company</h2>
                        <p className="text-gray-400 w-[10rem]  ">
                            Creating innovative solutions for a better world.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="/project" className="text-gray-400 hover:text-white">project</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/shivampatel4597/" className="text-gray-400 hover:text-white" target='_blank'>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p className="text-gray-400">
                            123 Main Street, Anytown, USA
                        </p>
                        <p className="text-gray-400">
                            Email: contact@yourcompany.com
                        </p>
                        <p className="text-gray-400">
                            Phone: (123) 456-7890
                        </p>
                    </div>
                </div>
                <div className="mt-10 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
