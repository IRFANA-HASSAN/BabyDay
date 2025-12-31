import React from 'react'
import { Facebook, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#f5d7dd] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Contact Us Section */}
            <div className="sm:text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-black text-base sm:text-lg">CONTACT US</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">Whatsapp No: +91 9898543038</p>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                If you have any questions or concerns, please do not hesitate to get in touch with us.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">We'd love to hear from you, contact us at</p>
              <p className="text-xs sm:text-sm text-gray-600 break-all">Service email: babyday@gmail.com</p>
              <div className="flex sm:justify-center sm:justify-start space-x-4 mt-3 sm:mt-4">
                <Facebook className="w-5 h-5 cursor-pointer text-black hover:text-gray-500" />
                <Instagram className="w-5 h-5 cursor-pointer text-black hover:text-gray-500" />
              </div>
            </div>
            
            {/* Collection Section */}
            <div className="sm:text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-black text-base sm:text-lg">Collection</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Best Selling</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Men Shirt</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Linen Shirts</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Cargo Shirts</a></li>
              </ul>
            </div>
            
            {/* Customer Service Section */}
            <div className="sm:text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-black text-base sm:text-lg">Customer Service</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-600 hover:text-black">Search</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Contact Information</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Refund Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Terms of Service</a></li>
              </ul>
            </div>
            
            {/* Newsletter Section */}
            <div className="sm:text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-black text-base sm:text-lg">Let's Get in Touch</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Sign up for our newsletter and receive 10% off your
              </p>
              <div className="flex max-w-sm sm:mx-auto sm:mx-0">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1  px-3 py-2 text-xs placeholder-gray-400 sm:text-sm border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="bg-black text-white px-3 sm:px-4 py-2 rounded-r-md hover:bg-gray-800">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            {/* Copyright and Payment Methods */}
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
              <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">Copyright©2025</p>
              
              {/* Payment Methods */}
              <div className="flex flex-col items-center sm:items-end space-y-2">
                <span className="text-xs sm:text-sm text-gray-600">Secure Checkout With</span>
                <div className="flex flex-wrap justify-center sm:justify-end gap-2">
                  <img src="/icons/Mastercard.png" alt="Mastercard" className='w-7 h-5 sm:w-8 sm:h-6 object-contain' />
                  <img src="/icons/Visa.png" alt="Visa" className='w-7 h-5 sm:w-8 sm:h-6 object-contain' />
                  <img src="/icons/American Express.png" alt="American Express" className='w-7 h-5 sm:w-8 sm:h-6 object-contain' />
                  <img src="/icons/Apple Pay.png" alt="Apple Pay" className='w-7 h-5 sm:w-8 sm:h-6 object-contain' />
                  <img src="/icons/Amazon Pay.png" alt="Amazon Pay" className='w-7 h-5 sm:w-8 sm:h-6 object-contain' />
                  <img src="/icons/Google Pay.png" alt="Google Pay" className='w-7 h-5 sm:w-8 sm:h-6 object-contain' />
                  <img src="/icons/PhonePe.png" alt="PhonePe" className='w-7 h-5 sm:w-8 sm:h-6 object-contain' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer


