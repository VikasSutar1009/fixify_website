import React, { useState } from "react";

const WhatsappForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.service) {
      alert("Please select a service");
      return;
    }

    const message = `
Hello Fixify Team,
I would like to book a service.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Description: ${form.description}
    `;

    const whatsappURL = `https://wa.me/919130804848?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    onClose();
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-lg border border-slate-300 bg-white " +
    "text-slate-900 placeholder:text-slate-400 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        Book a Service
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={inputStyle}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className={inputStyle}
          required
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputStyle}
          required
        >
          <option value="">Select Service</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Fabrication">Fabrication</option>
          <option value="Painting">Painting</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Renovation">Renovation</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe your requirement"
          value={form.description}
          onChange={handleChange}
          rows={4}
          className={inputStyle}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
        >
          Book via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default WhatsappForm;