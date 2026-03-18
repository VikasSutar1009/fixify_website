import React, { useState } from "react";
import { Instagram, Facebook, MessageCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-[1100px]">
        <div className="bg-white/90 backdrop-blur-md px-4 md:px-10 py-2 md:py-4 rounded-full flex items-center justify-between shadow-lg">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Fixify Logo"
              className="w-10 h-10 md:w-16 md:h-16 object-contain"
            />

            <div className="leading-tight">
              <div className="text-lg md:text-xl font-black text-slate-900">
                FIXIFY
              </div>

              {/* Subtitle hidden only on very small screens */}
              <div className="text-xs md:text-sm text-slate-500">
                At your service
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
            >
              Services
            </Link>

            <Link
              to="/reviews"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
            >
              Reviews
            </Link>

            <a
              href="https://wa.me/919130804848?text=Hello%20I%20want%20to%20book%20a%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Book Service
            </a>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <a
              href="https://www.instagram.com/fixify_atyourservice?igsh=NTVpb21ocXpxZXBt"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} className="hover:text-pink-500 transition" />
            </a>

            <a
              href="https://www.facebook.com/share/1FnVSgXz7Q/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={18} className="hover:text-blue-600 transition" />
            </a>

            <a
              href="https://wa.me/919130804848"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} className="hover:text-green-500 transition" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[350px] bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-6 text-center z-30">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-slate-700 font-medium hover:text-blue-600 transition"
          >
            Services
          </Link>

          <Link
            to="/reviews"
            onClick={() => setMenuOpen(false)}
            className="text-slate-700 font-medium hover:text-blue-600 transition"
          >
            Reviews
          </Link>

          <a
            href="https://wa.me/919130804848"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
          >
            Book Service
          </a>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-slate-500 pt-2">
            <a
              href="https://www.instagram.com/fixify_atyourservice?igsh=NTVpb21ocXpxZXBt"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={22} className="hover:text-pink-500 transition" />
            </a>

            <a
              href="https://www.facebook.com/share/1FnVSgXz7Q/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={22} className="hover:text-blue-600 transition" />
            </a>

            <a
              href="https://wa.me/919130804848"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={22} className="hover:text-green-500 transition" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;