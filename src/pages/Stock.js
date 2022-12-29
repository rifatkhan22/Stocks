import stocks from "../data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stock(props) {
  const { symbol } = useParams();
  const [stock, setStock] = useState(null);

  const getStock = async () => {
    try {
      const stock = stocks.find((eachStock) => eachStock.symbol === symbol);
      setStock(stock);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStock();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.name} ({stock.symbol})
        </h1>
        <ul>
          <li> Stock Price: {stock.lastPrice}</li>
          <li> Change: {stock.change}</li>
          <li> Stock High: {stock.high}</li>
          <li> Stock Low: {stock.low}</li>
          <li> Stock Open: {stock.open}</li>
        </ul>
      </div>
    );
  };

  const loading = () => {
    return <h1> Please wait, Stock is loading....</h1>;
  };
  return stock ? loaded() : loading();
}
