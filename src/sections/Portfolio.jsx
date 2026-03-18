import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const projects = [
  {
    title: "Luxury Interior Painting",
    image: "/assets/services/Painting.jpg",
    desc: "Premium wall finishing with modern textures and long-lasting coating.",
  },
  {
    title: "Industrial Fabrication",
    image: "/assets/services/Fabrication.jpg",
    desc: "Custom metal fabrication solutions with high durability standards.",
  },
  {
    title: "Modern Plumbing System",
    image: "/assets/services/Plumbing.jpg",
    desc: "Advanced leak-proof plumbing with smart water management.",
  },
  {
    title: "Electrical Installation",
    image: "/assets/services/Electricians.jpg",
    desc: "Safe and efficient electrical setups for residential and commercial.",
  },
  {
    title: "Home Renovation",
    image: "/assets/services/Renovation.jpg",
    desc: "Complete transformation with contemporary architectural design.",
  },
  {
    title: "Artistic Wall Design",
    image: "/assets/services/Wall Art.jpg",
    desc: "Creative murals and custom artistic wall concepts.",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#0b1220] text-white min-h-screen pt-32 pb-16">
      
      {/* Close Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md 
                   p-3 rounded-full hover:bg-white/20 transition shadow-lg"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-blue-400">Portfolio</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our recent projects showcasing precision, innovation,
          and craftsmanship across multiple home maintenance services.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-[#111827] 
                       shadow-lg hover:shadow-blue-500/20 
                       transition duration-300 hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;