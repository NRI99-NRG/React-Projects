import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`);
        const result = await res.json();
        setData(result.rates);
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
    };

    if (baseCurrency) {
      fetchRates();
    }
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
