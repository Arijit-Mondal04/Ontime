import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="mt-16 border-t border-white/5 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
          <span className="text-lg">👥</span>
        </div>
        <div>
          <p className="font-semibold text-lg">4,000+ bills tracked</p>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            Ontime has simulated reminders for thousands of credit card bills,
            helping users understand their upcoming payments at a glance.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
          <span className="text-lg">💰</span>
        </div>
        <div>
          <p className="font-semibold text-lg">₹5M+ interest saved</p>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            By paying full amounts instead of minimum dues, Ontime users could
            avoid lakhs in extra interest and late fees over time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
