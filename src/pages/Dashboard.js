import stocks from "../data";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <h1>Stocks Dashboard</h1>
      {stocks.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
