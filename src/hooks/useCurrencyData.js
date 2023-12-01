import { useState, useEffect } from "react";
import { useCurrencyContext } from "./CurrencyContext";
import { currencyApiLink } from "../utils/constants";

const useCurrencyData = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const { sourceCurrency } = useCurrencyContext();

  useEffect(() => {
    fetchCurrencyApi();
  }, [sourceCurrency]);

  const fetchCurrencyApi = async () => {
    const response = await fetch(
      currencyApiLink
    );
    const data = await response.json();
    setExchangeRates(data?.quotes);
    // console.log(data?.quotes, "data from custom hook");
  };
  return exchangeRates;
};

export default useCurrencyData;
