import React from "react";
import { ShieldCheck, Award, Users, Clock } from "lucide-react";

const TrustBar = () => {
  const stats = [
    { icon: <ShieldCheck size={28} />, label: "Fully Insured", val: "100%" },
    { icon: <Award size={28} />, label: "Quality Awards", val: "12+" },
    { icon: <Users size={28} />, label: "Happy Clients", val: "2.5k" },
    { icon: <Clock size={28} />, label: "Avg. Response", val: "24h" },
  ];

  return (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 group"
            >
              {/* Icon */}
              <div className="text-blue-600 bg-blue-50 p-3 rounded-2xl 
                              group-hover:bg-blue-600 
                              group-hover:text-white 
                              transition-colors">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {item.val}
                </p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
