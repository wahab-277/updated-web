"use client";
import { useState, useEffect } from "react";

// Define the type for the response data structure
interface CoinRates {
  rates: {
    BTC: number;
    BNB: number;
    // Add other currencies if needed
  };
}

export default function CoinMarket() {
  const API_KEY = "";
  const [data, setData] = useState<CoinRates | null>(null); // Use CoinRates type

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <>
      BTC: {data?.rates?.BTC}
      <br />
      BNB: {data?.rates?.BNB}
    </>
  );
}
