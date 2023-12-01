import React from "react";
import ReactDom from "react-dom/client";
import CurrencyConverter from "./components/CurrencyConverter";
import { CurrencyProvider } from "./hooks/CurrencyContext";
// import Header from "./components/Header";

const App = () => {
  return (
    <CurrencyProvider>
      <div className="App">
        <CurrencyConverter />
      </div>
    </CurrencyProvider>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
