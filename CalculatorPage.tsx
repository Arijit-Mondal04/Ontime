import React, { useState } from "react";
import { Link } from "react-router-dom";

interface CalculationResult {
  monthlyInterestRate: number;
  minPayment: number;
  remainingBalance: number;
  interestIfMin: number;
  interestIfFull: number;
  savings: number;
  daysUntilDue: number;
}

const CalculatorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    outstanding: 50000,
    apr: 36,
    minPercent: 5,
    billingDate: "2026-01-01",
    dueDate: "2026-01-28",
  });
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes("Date") ? value : parseFloat(value) || 0,
    });
  };

  const calculate = () => {
    const monthlyRate = formData.apr / 12 / 100;
    const minPayment = (formData.outstanding * formData.minPercent) / 100;
    const remaining = formData.outstanding - minPayment;
    const interestIfMin = remaining * monthlyRate;
    const interestIfFull = 0;
    const savings = interestIfMin;

    const today = new Date();
    const due = new Date(formData.dueDate);
    const daysUntilDue = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      monthlyInterestRate: monthlyRate,
      minPayment,
      remainingBalance: remaining,
      interestIfMin,
      interestIfFull,
      savings,
      daysUntilDue,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          See How Much You Can Save
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Enter your credit card details to see the real cost of paying minimum vs full amount.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Input Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-8">Enter Bill Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Outstanding Amount (₹)
              </label>
              <input
                type="number"
                name="outstanding"
                value={formData.outstanding}
                onChange={handleInputChange}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="50000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Annual Interest Rate (APR %)
              </label>
              <input
                type="number"
                name="apr"
                value={formData.apr}
                onChange={handleInputChange}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="36"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Minimum Payment %
              </label>
              <input
                type="number"
                name="minPercent"
                value={formData.minPercent}
                onChange={handleInputChange}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="5"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Billing Date
                </label>
                <input
                  type="date"
                  name="billingDate"
                  value={formData.billingDate}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl shadow-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/70 hover:scale-[1.02] transition-all duration-200 text-lg"
            >
              Calculate Savings
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-8">
          {result && (
            <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl animate-slide-in">
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                Your Savings Breakdown
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Minimum Payment</p>
                  <p className="text-3xl font-bold text-white">
                    ₹{result.minPayment.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Interest if Minimum Paid</p>
                  <p className="text-3xl font-bold text-orange-400">
                    ₹{result.interestIfMin.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Interest if Full Paid</p>
                  <p className="text-3xl font-bold text-emerald-400">₹0</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">
                    <span className="font-semibold">MONEY SAVED</span> by paying full
                  </p>
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    ₹{result.savings.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center justify-between text-sm md:text-base">
                  <span className="text-gray-300">
                    Days until due date:
                  </span>
                  <span className={`font-semibold px-4 py-2 rounded-full ${
                    result.daysUntilDue <= 3 
                      ? "bg-red-500/20 text-red-300 border border-red-500/40" 
                      : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  }`}>
                    {result.daysUntilDue > 0 ? `${result.daysUntilDue} days` : "Today!"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {!result && (
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center animate-pulse">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-3xl flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-300">
                Enter your details above
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Calculate how much interest you avoid by paying your full credit card bill instead of just the minimum.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
