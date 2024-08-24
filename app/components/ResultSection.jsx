"use client";

import Image from "next/image";
import { useMortgageContext } from "../hooks/useMortgageContext";

export default function ResultSection() {
  const { results } = useMortgageContext();

  return (
    <article className="bg-neutral-slate-900 p-6 lg:px-8 h-full text-white shadow-lg items-center justify-center flex flex-col lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-bl-[8rem] mb-12 lg:mb-2">
      {!results ? (
        <>
          {/* No Results Section */}
          <Image
            src="/illustration-empty.svg"
            width={150}
            height={150}
            alt=""
          />
          <h2 className="font-bold text-xl my-4">Results shown here</h2>
          <p className="text-neutral-slate-300 font-semibold mt-2">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </>
      ) : (
        <>
          {/* Results Section */}
          <h2 className="font-semibold self-start my-4 text-xl">
            Your results
          </h2>
          <p className=" mt-2 text-neutral-slate-300 ">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>

          <section className="w-full border-t-4 rounded-md p-4 my-8 border-t-lime shadow-lg ">
            <p className="text-lg font-semibold mt-4 text-neutral-slate-300">
              Your monthly repayment
            </p>
            <p className="text-lime text-5xl pb-8 border-b-2 border-b-neutral-slate-700 mb-8 mt-2">
              ${results.monthlyRepayments.toFixed(2)}
            </p>
            <p className="text-lg text-neutral-slate-300 font-semibold mt-2">
              Total you&apos;ll repay over the term:
              <span className="block text-white text-2xl">
                ${results.totalRepayment.toFixed(2)}
              </span>
            </p>
          </section>
        </>
      )}
    </article>
  );
}
