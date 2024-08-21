"use client";
import { createContext, useContext, useState } from "react";

// Create a context for mortgage data
const MortgageContext = createContext();

// Custom hook to use the context easily
export const useMortgageContext = () => useContext(MortgageContext);

// Provider component to wrap the app and provide state
export const MortgageProvider = ({ children }) => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("repayment");
  const [results, setResults] = useState(null);

  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("repayment");
    setResults(null);
  };

  const calculateRepayments = () => {
    if (mortgageAmount && mortgageTerm && interestRate) {
      const monthlyRepayments =
        (parseFloat(mortgageAmount) * parseFloat(interestRate)) / 100;
      const totalRepayment = monthlyRepayments * mortgageTerm * 12;
      setResults({ monthlyRepayments, totalRepayment });
    } else {
      setResults(null);
    }
  };

  return (
    <MortgageContext.Provider
      value={{
        mortgageAmount,
        mortgageTerm,
        interestRate,
        mortgageType,
        results,
        setMortgageAmount,
        setMortgageTerm,
        setInterestRate,
        setMortgageType,
        calculateRepayments,
        clearAll,
      }}
    >
      {children}
    </MortgageContext.Provider>
  );
};
