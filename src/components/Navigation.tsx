import React from 'react';

interface NavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavProps) {
  return (
    <nav className="fixed top-0 w-full bg-darkGreen/95 backdrop-blur-sm z-40 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <span className="text-gold font-serif text-xl">AM</span>
          <div className="flex space-x-8">
            {['About', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`text-sm tracking-wider ${
                  activeSection === item.toLowerCase()
                    ? 'text-gold'
                    : 'text-gold/70 hover:text-gold'
                } transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}