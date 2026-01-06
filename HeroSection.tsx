import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Never miss a credit
        <br />
        card bill again with
        <br />
        your smart{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">
          reminder
        </span>
      </h1>

      <p className="text-gray-300 max-w-xl mb-8 text-sm md:text-base">
        Ontime helps you see the real cost of paying only the minimum due and
        reminds you before every due date, so you save on interest and late
        fees with zero effort.
      </p>

      {/* CTA buttons - now navigate to calculator */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Link to="/calculator">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 text-sm font-semibold shadow-lg shadow-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/70 hover:scale-[1.02] transition-all duration-200">
            Try Ontime demo
          </button>
        </Link>
        <Link to="/calculator">
          <button className="px-6 py-3 rounded-full border border-white/20 text-sm text-gray-200 hover:bg-white/5 hover:border-white/40 transition-all duration-200">
            See how much you can save
          </button>
        </Link>
      </div>

      <p className="text-xs md:text-sm text-gray-400 max-w-sm">
        Built for students and busy professionals who want simple, visual
        credit card reminders and clear savings insights instead of complex
        banking dashboards.
      </p>
    </section>
  );
};

export default HeroSection;
