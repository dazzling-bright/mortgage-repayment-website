"use client";
import { useState } from "react";
import Image from "next/image";
import { useMortgageContext } from "../hooks/useMortgageContext";

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

  // States for managing error messages
  const [mortgageAmountError, setMortgageAmountError] = useState(false);
  const [mortgageTermError, setMortgageTermError] = useState(false);
  const [interestRateError, setInterestRateError] = useState(false);

  // Function to handle form submission with validation
  const handleCalculate = () => {
    let hasError = false;

    // Validate mortgage amount
    if (!mortgageAmount) {
      setMortgageAmountError(true);
      hasError = true;
    }

    // Validate mortgage term
    if (!mortgageTerm) {
      setMortgageTermError(true);
      hasError = true;
    }

    // Validate interest rate
    if (!interestRate) {
      setInterestRateError(true);
      hasError = true;
    }

    // Proceed with calculation only if no errors
    if (!hasError) {
      calculateRepayments();
    }
  };

  return (
    <div className="w-full bg-white p-6 shadow-md rounded-lg">
      <header className="flex md:flex-row flex-col justify-between font-bold my-4">
        <h2 className="text-3xl text-neutral-slate-900 ">
          Mortgage Calculator
        </h2>
        <button
          onClick={clearAll}
          className="text-neutral-slate-500 font-normal underline mb-4 visited:border-b-neutral-800 hover:text-neutral-slate-900 transition-all duration-300"
        >
          Clear all
        </button>
      </header>

      <form className="space-y-4 text-neutral-slate-500 font-bold">
        {/* Mortgage Amount */}
        <>
          <label
            htmlFor="mortgageAmount"
            className="block text-neutral-slate-900 font-semibold"
          >
            Mortgage Amount
          </label>

          <div
            className={`flex border-2 ] rounded-lg p-1 hover:shadow-[0_0_0_5px_rgba(0,0,0,0.1)] transition-all duration-300  ${
              mortgageAmountError ? "border-red" : "border-neutral-slate-500"
            }`}
          >
            <span
              className={`font-bold p-3 px-4 bg-neutral-slate-100 rounded-s-md ${
                mortgageAmountError
                  ? "bg-red text-white"
                  : "text-neutral-slate-700 bg-neutral-slate-100"
              }`}
            >
              $
            </span>
            <input
              type="number"
              id="mortgageAmount"
              value={mortgageAmount}
              onChange={(e) => {
                const value = e.target.value;
                setMortgageAmount(value >= 0 ? value : 0);
                if (value) setMortgageAmountError(false);
              }}
              className={`w-full p-2 outline-none font-medium text-neutral-slate-900 text-lg rounded-e-lg ${
                mortgageAmountError ? "border-red" : ""
              }`}
              placeholder="Enter mortgage amount"
              min="0"
            />
          </div>
          {mortgageAmountError && (
            <p className="text-red italic font-normal text-sm mt-1">
              This field is required
            </p>
          )}
        </>

        {/* Mortgage Term */}
        <>
          <label
            htmlFor="mortgageTerm"
            className="block text-neutral-slate-900 font-semibold"
          >
            Mortgage Term
          </label>
          <div
            className={`flex border-2 rounded-lg p-1 hover:shadow-[0_0_0_5px_rgba(0,0,0,0.1)] transition-all duration-300 ${
              mortgageTermError ? "border-red" : "border-neutral-slate-500"
            }`}
          >
            <input
              type="number"
              id="mortgageTerm"
              value={mortgageTerm}
              onChange={(e) => {
                const value = e.target.value;
                setMortgageTerm(value >= 0 ? value : 0);
                if (value) setMortgageTermError(false); // Clear error on input
              }}
              className={`w-full p-2 outline-none font-medium text-neutral-slate-900 text-lg rounded-s-lg ${
                mortgageTermError ? "border-red" : ""
              }`}
              placeholder="Enter mortgage term in years"
            />
            <span
              className={`font-bold p-3 px-4 bg-neutral-slate-100 rounded-e-md  ${
                mortgageTermError
                  ? "bg-red text-white"
                  : "text-neutral-slate-700 "
              }`}
            >
              years
            </span>
          </div>
          {mortgageTermError && (
            <p className="text-red italic font-normal text-sm mt-1">
              This field is required
            </p>
          )}
        </>

        {/* Interest Rate */}
        <>
          <label
            htmlFor="interestRate"
            className="block text-neutral-slate-900 font-semibold"
          >
            Interest Rate
          </label>

          <div
            className={`flex border-2 rounded-lg p-1 hover:shadow-[0_0_0_5px_rgba(0,0,0,0.1)] transition-all duration-300 ${
              interestRateError ? "border-red" : "border-neutral-slate-500"
            }`}
          >
            <input
              type="number"
              step="0.1"
              id="interestRate"
              value={interestRate}
              placeholder="Enter interest rate"
              onChange={(e) => {
                const value = e.target.value;
                setInterestRate(value >= 0 ? value : 0);
                if (value) setInterestRateError(false); // Clear error on input
              }}
              className={`w-full p-2 outline-none font-medium text-neutral-slate-900 text-lg rounded-s-lg ${
                interestRateError ? "border-red" : ""
              }`}
            />
            <span
              className={`font-bold p-3 px-4 bg-neutral-slate-100 rounded-e-md  ${
                interestRateError
                  ? "bg-red text-white"
                  : "text-neutral-slate-700 "
              }`}
            >
              %
            </span>
          </div>
          {interestRateError && (
            <p className="text-red italic font-normal text-sm mt-1">
              This field is required
            </p>
          )}
        </>

        {/* Mortgage Type */}
        <>
          <label className="block text-neutral-slate-900 font-semibold">
            Mortgage Type
          </label>
          <div className="flex md:items-center gap-4 font-bold text-neutral-slate-900 flex-col md:flex-row">
            <label className="p-3 rounded-lg flex-1 border cursor-pointer border-neutral-slate-500">
              <input
                type="radio"
                value="repayment"
                checked={mortgageType === "repayment"}
                onChange={() => setMortgageType("repayment")}
              />
              <span className="ml-2">Repayment</span>
            </label>
            <label className="p-3 rounded-lg flex-1 cursor-pointer border border-neutral-slate-500">
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
          onClick={handleCalculate}
          className="flex gap-4 w-full px-2 justify-center md:w-auto items-center bg-lime md:px-8 text-neutral-slate-900 font-bold py-3 rounded-3xl"
        >
          <Image src="/icon-calculator.svg" width={20} height={20} alt="" />
          <span>Calculate Repayments</span>
        </button>
      </form>
    </div>
  );
}
