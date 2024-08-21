"use client";

import { useMortgageContext } from "../hooks/MortgageContext";

export default function ResultSection() {
  const { results } = useMortgageContext();

  return (
    <article className="bg-slate-900 p-6 h-full shadow-md rounded-lg">
      {!results ? (
        <>
          {/* No Results Section */}
          <h2 className="text-gray-700 font-bold text-xl">No result</h2>
          <p className="text-gray-600 mt-2">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </>
      ) : (
        <>
          {/* Results Section */}
          <h2 className="text-gray-700 font-bold text-xl">Your results</h2>
          <p className="text-gray-600 mt-2">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>

          <>
            <p className="text-lg font-semibold mt-6">
              Your monthly repayments: ${results.monthlyRepayments.toFixed(2)}
            </p>
            <p className="text-lg font-semibold mt-2">
              Total you&apos;ll repay over the term: $
              {results.totalRepayment.toFixed(2)}
            </p>
          </>
        </>
      )}
    </article>
  );
}
