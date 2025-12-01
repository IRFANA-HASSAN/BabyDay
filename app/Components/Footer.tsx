import React from 'react'
import { Facebook, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    
     <>
      {/* Footer */}
      <footer className="bg-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 text-black">CONTACTS US</h3>
              <p className="text-sm text-gray-600 mb-2">Whatsapp No : +91 9898543038</p>
              <p className="text-sm text-gray-600 mb-4">If you have any questions or concerns, please do not hesitate to get in touch with us.</p>
              <p className="text-sm text-gray-600">We'd love to hear from you, contact us at</p>
              <p className="text-sm text-gray-600">Service email : zayraapparel18@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-black">Collection</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Best Selling</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Men Shirt</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Linen Shirts</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Cargo Shirts</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-black">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-black">Search</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Contact Information</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Refund Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-black">Let's Get in Touch</h3>
              <p className="text-sm text-gray-600 mb-4">Sign up for our newsletter and receive 10% off your</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">Copyright©2024</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-600">Secure Checkout With</span>
              <div className="flex space-x-2">
                <div className="text-sm"><img src="/icons/Mastercard.png" alt="Mastercard" className='w-8 h-6' /></div>
                <div className="text-xl"><img src="/icons/Visa.png" alt="Visa" className='w-8 h-6'/></div>
                <div className="text-xl"><img src="/icons/American Express.png" alt="American Express" className='w-8 h-6'/></div>
                <div className="text-xl"><img src="/icons/Apple Pay.png" alt="Apple Pay" className='w-8 h-6'/></div>
                <div className="text-xl"><img src="/icons/Amazon Pay.png" alt="Amazon Pay" className='w-8 h-6'/></div>
                <div className="text-xl"><img src="/icons/Google Pay.png" alt="Google Pay" className='w-8 h-6'/></div>
                <div className="text-xl"><img src="/icons/PhonePe.png" alt="PhonePe" className='w-8 h-6'/></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
     </>
  )
}

export default Footer
