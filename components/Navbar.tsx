
import React, { useState } from 'react';
import { Menu, X, Home, Building2, Sofa, PaintBucket, PhoneCall } from 'lucide-react';
import Logo from './Logo';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: Page.Home, icon: <Home size={18} /> },
    { name: 'Properties', id: Page.Properties, icon: <Building2 size={18} /> },
    { name: 'Furniture', id: Page.Furniture, icon: <Sofa size={18} /> },
    { name: 'Paints', id: Page.Paints, icon: <PaintBucket size={18} /> },
    { name: 'Contact', id: Page.Contact, icon: <PhoneCall size={18} /> },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-2xl border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate(Page.Home)}>
            <Logo className="scale-75 origin-left" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activePage === item.id 
                    ? 'text-gold border-b-2 border-gold rounded-none' 
                    : 'text-gray-300 hover:text-gold'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gold hover:bg-primary/50 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md absolute w-full border-b border-gold/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  activePage === item.id ? 'bg-gold text-primary' : 'text-gray-300 hover:bg-gold/10'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
