import React, { useState } from "react";
import { Instagram, Facebook, MessageCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[80%] sm:w-[88%] max-w-[820px]">

        <div className="bg-white/90 backdrop-blur-md px-4 sm:px-6 py-3 rounded-full flex items-center justify-between shadow-md">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Fixify Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm sm:text-base font-bold text-slate-900">
                FIXIFY
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500">
                At your service
              </div>
            </div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3 text-slate-500">

              <a
                href="https://www.instagram.com/fixify_atyourservice?igsh=NTVpb21ocXpxZXBt"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
              >
                <Instagram size={18} className="hover:text-pink-500" />
              </a>

              <a
                href="https://www.facebook.com/share/1FnVSgXz7Q/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
              >
                <Facebook size={18} className="hover:text-blue-600" />
              </a>

              <a
                href="https://wa.me/919130804848"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
              >
                <MessageCircle size={18} className="hover:text-green-500" />
              </a>

            </div>

            {/* Menu Button */}
            <button
              className="text-slate-700 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] bg-white rounded-2xl shadow-xl p-5 flex flex-col gap-5 text-center z-30">

          {/* Services (Scroll to section) */}
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 transition"
          >
            Services
          </a>

          {/* Reviews (keep routing if separate page) */}
          <Link
            to="/reviews"
            onClick={() => setMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 transition"
          >
            Reviews
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919130804848"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
          >
            Book Service
          </a>

        </div>
      )}
    </>
  );
};

export default Navbar;