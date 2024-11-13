import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SNOOKER<span className="text-red-500">PRO</span></h3>
            <p className="text-gray-400">The home of professional snooker, featuring live scores, rankings, and news from the world of snooker.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">TV Schedule</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors duration-200" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors duration-200" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors duration-200" />
              <Youtube className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors duration-200" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SnookerPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}