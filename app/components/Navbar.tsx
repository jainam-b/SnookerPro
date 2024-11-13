import React, { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Matches', 'Players', 'News', 'Shop'];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md text-white z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 font-bold text-2xl tracking-tighter">
              SNOOKER<span className="text-red-500">PRO</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group"
                >
                  <span className="relative z-10 hover:text-red-500 transition-colors duration-200">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-red-500 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-red-500 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
              Sign In
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-black/90 backdrop-blur-md border-t border-white/10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-2 flex items-center space-x-4 border-t border-white/10">
            <Search className="w-5 h-5" />
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}