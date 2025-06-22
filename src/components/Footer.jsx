import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 sm:px-10 px-5">
      <div className=" px-10 screen-max-width mx-auto flex flex-col sm:flex-row justify-between gap-10">

        {/* Left - Logo and About */}
        <div className="flex-1">
          <img width={60} height={80}
          src="https://tse2.mm.bing.net/th?id=OIP.OFqGhDKcTgG-GLaLyWR3BwHaFN&pid=Api&P=0&h=180" alt="Logo" className="mb-4 w-8" />
          <p className="text-sm leading-relaxed">
            Bringing you quality products with fast delivery and top-notch support.
            Shop with confidence anytime, anywhere.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex-1">
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2">
            {['Home', 'Shop', 'About', 'Contact', 'Support'].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Newsletter or Socials */}
        <div className="flex-1">
          <h4 className="text-white font-semibold mb-3">Stay Connected</h4>
          <p className="text-sm mb-4">Follow us on social media for updates and offers:</p>
          <div className="flex space-x-4">
            {/* Replace with real icons or SVGs */}
            <div className="w-6 h-6 bg-gray-600 rounded-full hover:bg-white hover:text-black flex items-center justify-center cursor-pointer transition">
              F
            </div>
            <div className="w-6 h-6 bg-gray-600 rounded-full hover:bg-white hover:text-black flex items-center justify-center cursor-pointer transition">
              T
            </div>
            <div className="w-6 h-6 bg-gray-600 rounded-full hover:bg-white hover:text-black flex items-center justify-center cursor-pointer transition">
              I
            </div>
          </div>
        </div>

      </div>

      {/* Bottom - Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Titanium@iphone All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
