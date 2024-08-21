"use client";
import { useMortgageContext } from "../hooks/MortgageContext";

export default function FormInput() {
  const {
    mortgageAmount,
    mortgageTerm,
    interestRate,
    mortgageType,
    setMortgageAmount,
    setMortgageTerm,
    setInterestRate,
    setMortgageType,
    calculateRepayments,
    clearAll,
  } = useMortgageContext();

  return (
    <div className=" w-full bg-white p-6 shadow-md rounded-lg">
      <header className="flex justify-between font-bold my-4">
        <h2 className="text-3xl text-neutral-950 ">Mortgage Calculator</h2>
        <button
          onClick={clearAll}
          className="text-neutral-slate-500 font-normal mb-4 border-b-2 border-transparent hover:border-b-neutral-800 visited:border-b-neutral-800 hover:text-neutral-800 transition-all duration-300"
        >
          Clear all
        </button>
      </header>

      <form className="space-y-4">
        {/* Mortgage Amount */}
        <div>
          <label htmlFor="mortgageAmount" className="block text-gray-700">
            Mortgage Amount
          </label>
          <input
            type="number"
            id="mortgageAmount"
            required
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter mortgage amount"
          />
        </div>

        {/* Mortgage Term */}
        <>
          <label htmlFor="mortgageTerm" className="block text-gray-700">
            Mortgage Term (years)
          </label>
          <input
            type="number"
            id="mortgageTerm"
            value={mortgageTerm}
            onChange={(e) => setMortgageTerm(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter mortgage term in years"
          />
        </>

        {/* Interest Rate */}
        <>
          <label htmlFor="interestRate" className="block text-gray-700">
            Interest Rate (%)
          </label>
          <input
            type="number"
            step="0.01"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter interest rate"
          />
        </>

        {/* Mortgage Type */}
        <>
          <label className="block text-gray-700">Mortgage Type</label>
          <div className="flex space-x-4 mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="repayment"
                checked={mortgageType === "repayment"}
                onChange={() => setMortgageType("repayment")}
              />
              <span className="ml-2">Repayment</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="interest-only"
                checked={mortgageType === "interest-only"}
                onChange={() => setMortgageType("interest-only")}
              />
              <span className="ml-2">Interest Only</span>
            </label>
          </div>
        </>

        <button
          type="button"
          onClick={calculateRepayments}
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-md"
        >
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}
