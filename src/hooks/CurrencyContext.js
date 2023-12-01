import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [sourceValue, setSourceValue] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("INR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [targetValue, setTargetValue] = useState("");

  const contextValue = {
    sourceValue,
    setSourceValue,
    sourceCurrency,
    setSourceCurrency,
    targetCurrency,
    setTargetCurrency,
    targetValue,
    setTargetValue,
  };

  console.log(contextValue, "contextValue");

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrencyContext must be used within a CurrencyProvider");
  }
  return context;
};

export { CurrencyProvider, useCurrencyContext };
