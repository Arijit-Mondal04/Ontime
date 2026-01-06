import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-white">
        {/* Top navigation */}
        <header className="px-6 py-4 bg-black/20 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-pink-500 via-orange-400 to-yellow-400 flex items-center justify-center shadow-lg shadow-pink-500/40">
                <span className="text-xs font-semibold">O</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Ontime
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/calculator" className="hover:text-white transition-colors">
                Calculator
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                About
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Support
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/login" className="hidden md:inline-block text-sm text-gray-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/signup" className="text-sm font-medium text-white px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 shadow-lg shadow-orange-500/40">
                Sign up
              </Link>
            </div>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/login" element={<div>Login Page (coming soon)</div>} />
          <Route path="/signup" element={<div>Sign Up Page (coming soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

// Home page component
function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <HeroSection />
        
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md animate-slide-in">
            <div className="absolute -bottom-10 left-6 right-0 h-52 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 opacity-80 blur-[1px] animate-slide-in delay-200">
              <div className="h-full w-full rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 shadow-2xl shadow-purple-500/50" />
            </div>

            <div className="relative h-52 rounded-3xl bg-gradient-to-tr from-pink-500 via-orange-500 to-yellow-400 shadow-2xl shadow-pink-500/60 transform translate-x-4 -translate-y-4 animate-slide-in delay-400 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-orange-500/70 transition-all duration-300">
              <div className="h-full w-full rounded-3xl p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-12 rounded-lg bg-white/15" />
                  <div className="h-8 w-8 rounded-full bg-white/80" />
                </div>
                <div>
                  <p className="text-xs text-white/80 mb-1">
                    Credit Limit Tracker
                  </p>
                  <p className="text-lg tracking-widest">
                    4785 0125 012 4520
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <div>
                    <p className="uppercase text-[10px]">Card Holder</p>
                    <p className="font-semibold">Ontime User</p>
                  </div>
                  <div>
                    <p className="uppercase text-[10px]">Next Due</p>
                    <p className="font-semibold">28 / 01 / 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StatsSection />
    </div>
  );
}

export default App;
