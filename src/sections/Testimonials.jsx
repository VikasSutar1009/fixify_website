import React from "react";
import Section from "../components/layout/Section";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Suraj More",
      role: "Homeowner",
      text:
        "The wall painting team transformed my living room into a work of art. Truly professional!",
      service: "Wall Painting",
    },
    {
      name: "Ajit Pawar",
      role: "Business Owner",
      text:
        "Heavy duty fabrication delivered on time. Best precision work I've seen in the city.",
      service: "Fabrication",
    },
    {
      name: "Anita D.",
      role: "Architect",
      text:
        "The electrical wiring was clean and followed all modern smart-home standards.",
      service: "Electricians",
    },
  ];

  return (
    <Section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-16">
          What our <span className="text-blue-600">Clients Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm 
                         border border-slate-100 
                         hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 italic mb-6">
                “{rev.text}”
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <h4 className="font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    {rev.role}
                  </p>
                </div>

                <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-bold uppercase">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
