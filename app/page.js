import FormInput from "./components/FormInput";
import ResultSection from "./components/ResultSection";
import { MortgageProvider } from "./hooks/useMortgageContext";

export default function MortgageCalculator() {
  return (
    <MortgageProvider>
      <main className="grid h-screen place-items-center px-4 lg:px-8">
        <div className="grid px-2 md:px-4 gap-4 md:gap-8 max-w-6xl place-items-center lg:grid-cols-2">
          {/* Column 1: Form */}
          <FormInput />
          {/* Column 2: Results */}
          <ResultSection />
        </div>
      </main>
    </MortgageProvider>
  );
}
