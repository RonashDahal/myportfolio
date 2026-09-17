import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, RefreshCw, CheckCircle2, TrendingUp, DollarSign, Calendar, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const LiveEmiDemo: React.FC = () => {
  const [totalCost, setTotalCost] = useState<number>(85000); // NPR
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [annualInterest, setAnnualInterest] = useState<number>(12);
  const [tenureMonths, setTenureMonths] = useState<number>(12);

  // Formatting helper for Nepalese Rupees
  const formatNPR = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(Math.round(amount));
  };

  const calculations = useMemo(() => {
    const downPaymentAmount = (totalCost * downPaymentPercent) / 100;
    const principal = Math.max(0, totalCost - downPaymentAmount);
    
    if (principal <= 0 || tenureMonths <= 0) {
      return {
        downPaymentAmount,
        principal: 0,
        monthlyEmi: 0,
        totalInterest: 0,
        totalPayable: downPaymentAmount
      };
    }

    const monthlyInterestRate = (annualInterest / 12) / 100;

    let monthlyEmi = 0;
    if (monthlyInterestRate === 0) {
      monthlyEmi = principal / tenureMonths;
    } else {
      const compoundFactor = Math.pow(1 + monthlyInterestRate, tenureMonths);
      monthlyEmi = (principal * monthlyInterestRate * compoundFactor) / (compoundFactor - 1);
    }

    const totalLoanPayment = monthlyEmi * tenureMonths;
    const totalInterest = Math.max(0, totalLoanPayment - principal);
    const totalPayable = downPaymentAmount + totalLoanPayment;

    return {
      downPaymentAmount,
      principal,
      monthlyEmi,
      totalInterest,
      totalPayable
    };
  }, [totalCost, downPaymentPercent, annualInterest, tenureMonths]);

  const presets = [
    { label: 'Smartphone', cost: 45000, dp: 25, rate: 12, months: 6 },
    { label: 'Gaming Laptop', cost: 125000, dp: 20, rate: 11, months: 12 },
    { label: 'Two-Wheeler', cost: 320000, dp: 30, rate: 13.5, months: 24 }
  ];

  return (
    <section id="emi-tool" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Software Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
              Nepalese Rupee (Rs.) EMI Calculator
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-2xl">
              Live interactive simulator based on Ronash's published{' '}
              <a 
                href="https://github.com/RonashDahal/EMI-calculator-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold underline decoration-indigo-200 underline-offset-2 hover:text-indigo-700 inline-flex items-center gap-1"
              >
                EMI-calculator- project
                <ExternalLink className="w-3.5 h-3.5" />
              </a>. Try adjusting the parameters below.
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-500 font-medium mr-1">Presets:</span>
            {presets.map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setTotalCost(preset.cost);
                  setDownPaymentPercent(preset.dp);
                  setAnnualInterest(preset.rate);
                  setTenureMonths(preset.months);
                }}
                className="px-3 py-1.5 text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            
            {/* Total Cost Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-800">
                  Total Device / Asset Cost (Rs.)
                </label>
                <span className="font-mono text-sm font-bold text-indigo-600">
                  Rs. {formatNPR(totalCost)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="5000"
                value={totalCost}
                onChange={(e) => setTotalCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Rs. 10,000</span>
                <span>Rs. 5,00,000</span>
                <span>Rs. 10,00,000</span>
              </div>
            </div>

            {/* Down Payment % */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-800">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="font-mono text-sm font-medium text-slate-700">
                  Rs. {formatNPR(calculations.downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>0% (No DP)</span>
                <span>40%</span>
                <span>80%</span>
              </div>
            </div>

            {/* Interest Rate & Tenure 2-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Annual Interest */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-800">
                    Interest Rate (% / yr)
                  </label>
                  <span className="font-mono text-sm font-bold text-indigo-600">
                    {annualInterest}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  step="0.5"
                  value={annualInterest}
                  onChange={(e) => setAnnualInterest(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Tenure Months */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-800">
                    Tenure ({tenureMonths} Months)
                  </label>
                  <span className="font-mono text-sm font-bold text-slate-700">
                    {(tenureMonths / 12).toFixed(1)} yrs
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[6, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTenureMonths(m)}
                      className={`py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        tenureMonths === m
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {m} mo
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Reset Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setTotalCost(85000);
                  setDownPaymentPercent(20);
                  setAnnualInterest(12);
                  setTenureMonths(12);
                }}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
            
            <div>
              <span className="text-xs font-mono tracking-widest text-indigo-300 uppercase">
                Calculated Monthly Installment
              </span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                Rs. {formatNPR(calculations.monthlyEmi)}
                <span className="text-xs font-normal text-indigo-200 ml-1">/ month</span>
              </div>
              <p className="text-xs text-indigo-200/80 mt-1">
                Fixed monthly payment over {tenureMonths} installments
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-3 pt-4 border-t border-indigo-800/80 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-indigo-800/40">
                <span className="text-indigo-200">Total Purchase Cost:</span>
                <span className="font-mono font-semibold text-white">Rs. {formatNPR(totalCost)}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-indigo-800/40">
                <span className="text-indigo-200">Down Payment ({downPaymentPercent}%):</span>
                <span className="font-mono font-semibold text-emerald-300">Rs. {formatNPR(calculations.downPaymentAmount)}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-indigo-800/40">
                <span className="text-indigo-200">Net Financed Principal:</span>
                <span className="font-mono font-semibold text-white">Rs. {formatNPR(calculations.principal)}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-indigo-800/40">
                <span className="text-indigo-200">Total Accrued Interest:</span>
                <span className="font-mono font-semibold text-amber-300">Rs. {formatNPR(calculations.totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-sm font-semibold">
                <span className="text-white">Total Outflow (DP + Loan):</span>
                <span className="font-mono text-indigo-300">Rs. {formatNPR(calculations.totalPayable)}</span>
              </div>
            </div>

            {/* Footer notice */}
            <div className="p-3 bg-white/10 rounded-xl text-[11px] text-indigo-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Accurate mathematical model based on standard reducing balance EMI formula used across banks in Nepal.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
