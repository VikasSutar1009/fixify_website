import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-24">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            FIXIFY<span className="text-blue-600">.</span>
          </h2>

          <p className="text-slate-500 max-w-md mb-6">
            Premium home & business maintenance services. Fabrication,
            painting, electrical, and repair solutions delivered with care.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/fixify_atyourservice?igsh=NTVpb21ocXpxZXBt"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-pink-100 transition"
            >
              <Instagram size={20} className="text-slate-600 hover:text-pink-500" />
            </a>

            <a
              href="https://www.facebook.com/share/1FnVSgXz7Q/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 transition"
            >
              <Facebook size={20} className="text-slate-600 hover:text-blue-600" />
            </a>

            <a
              href="https://wa.me/919130804848"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-green-100 transition"
            >
              <MessageCircle size={20} className="text-slate-600 hover:text-green-500" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>Cleaning Services</li>
            <li>Metal Fabrication</li>
            <li>Painting</li>
            <li>Electrical Works</li>
            <li>Plumbing</li>
            <li>Renovation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>

          <div className="space-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <Mail size={16} />
              hello@fixify.com
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              +91 91308 04848
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              Kolhapur, Maharashtra
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-400">

          {/* Left */}
          <span>
            © {new Date().getFullYear()} Fixify Services. All rights reserved.
          </span>

          {/* Right */}
          <span>
            Powered by{" "}
            <a
              href="https://syntova.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Syntova
            </a>
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;