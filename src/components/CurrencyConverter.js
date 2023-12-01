// src/components/CurrencyConverter.js
import React from "react";
import Select from "react-select";
import useCurrencyData from "../hooks/useCurrencyData";
import { useCurrencyContext } from "../hooks/CurrencyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swap from "../assets/swap.svg";

const CurrencyConverter = () => {
  const {
    sourceValue,
    setSourceValue,
    sourceCurrency,
    setSourceCurrency,
    targetCurrency,
    setTargetCurrency,
    targetValue,
    setTargetValue,
  } = useCurrencyContext();

  // fetching data from custom hook
  const currencyData = useCurrencyData();

  // function to convert currency from INR to target currency
  const convertCurrency = () => {
    if (!sourceValue) {
      toast.error("Please enter an INR value before converting.");
      return;
    }
    const rate = currencyData[`${sourceCurrency}${targetCurrency}`];
    const convertedValue = (sourceValue * rate).toFixed(2);
    setTargetValue(convertedValue);
  };

  // function to convert currency from target currency to INR
  const convertToInr = () => {
    if (!targetValue) {
      toast.error("Please enter value before converting to INR.");
      return;
    }
    const rate = currencyData[`${sourceCurrency}${targetCurrency}`];
    const valueInInr = (targetValue / rate).toFixed(2);
    setSourceValue(valueInInr);
  };

  // function to reset input fields
  const reset = () => {
    toast.success("Input fields have been reset.");
    setSourceValue("");
    setTargetValue("");
  };

  // extracting the keys of the object for iteration
  const currencyOptions = Object.keys(currencyData);

  // iterating over the other currency array and passing the values to the option tag by removing the first 3 characters
  const currencyCodes = currencyOptions.map((currency) => ({
    value: currency.substring(3),
    label: currency.substring(3),
  }));

  // custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "40px",
      borderRadius: "0.5rem",
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingY: "6px",
      paddingX: "12px",
    }),
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container  p-4 lg:w-2/3 xl:w-1/2 rounded-lg">
        {/* Header */}
        <div className="bg-indigo-500 flex flex-col justify-center items-center text-white py-6 gap-2 rounded-t-lg">
          <p className="w-auto font-semibold text-2xl sm:text-3xl uppercase p-2 tracking-wider">
            Rate Rocket 🚀
          </p>
          <p className="text-xs sm:text-sm -mt-2 tracking-wider relative right-2">
            View current rates for global currency exchange
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col bg-blue-100 border rounded-b-lg shadow-md p-4">
          {/* Input Field 1 */}
          <div className="mt-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm sm:text-lg font-semibold text-gray-700 whitespace-nowrap">
                Source Currency:
              </label>
              <Select
                options={[{ value: "INR", label: "INR" }]}
                value={{ value: sourceCurrency, label: sourceCurrency }}
                onChange={(selectedOption) =>
                  setSourceCurrency(selectedOption.value)
                }
                styles={customStyles}
              />
            </div>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={sourceValue}
              onChange={(e) => setSourceValue(e.target.value)}
            />
          </div>

          {/* Input Field 2 */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm sm:text-lg font-semibold text-gray-700 whitespace-nowrap">
                Target Currency:
              </label>
              <Select
                options={currencyCodes}
                value={{ value: targetCurrency, label: targetCurrency }}
                onChange={(selectedOption) =>
                  setTargetCurrency(selectedOption.value)
                }
                styles={customStyles}
              />
            </div>
            <input
              type="text"
              className="p-2 border rounded w-full hover:border-blue-600"
              value={targetValue}
              onChange={(e) => setTargetValue(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-around px-2 sm:px-4 mt-6 gap-2 md:gap-0">
            <button
              onClick={convertCurrency}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-2 sm:mb-0 sm:mr-2"
            >
              Convert
            </button>
            <button
              onClick={convertToInr}
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 mb-2 sm:mb-0 sm:mr-2"
            >
              Value In INR
            </button>
            <button
              onClick={reset}
              className="bg-orange-800 text-white py-2 px-4 rounded-md hover:bg-orange-900"
            >
              Reset
            </button>
          </div>

          {/* Text Content in Lower Side  */}
          <div className="max-w-md mx-auto p-4 rounded-lg shadow-md flex flex-col justify-center items-center border mt-4 border-slate-300">
            <p className="font-semibold text-sm sm:text-md">
              INR &nbsp;
              <span className="text-orange-700">{sourceValue}</span> &nbsp; in
              &nbsp;
              <span className="text-orange-500">{targetCurrency}</span> &nbsp;
              will be &nbsp;
              <span className="text-red-700">{targetValue}</span> &nbsp;
            </p>
          </div>
        </div>

        {/* Toast Configuration */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          showProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
