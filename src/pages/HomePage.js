import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCoins } from "../redux/actions/get_coins";
import { getFavoriteCoins } from "../redux/actions/get_favorite_coins";

export default function HomePage() {
  const [pageRecords, setPageRecords] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotal] = useState(1);
  let { coins, favoriteCoins } = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState("INR");
  const handleOnChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    dispatch(getCoins(currency));
    dispatch(getFavoriteCoins(currency));
  }, [currency]);

  useEffect(() => {
    if (coins) {
      setPageRecords(coins.slice(0, 10));
    }
  }, [pageNo]);

  const handlePageClick= (id)=>{
    let start = 10*parseInt(id)
    console.log(start);
    let end = 10+10*parseInt(id);
    console.log(end);

   setPageRecords(coins.slice(start,end));

  }
  return (
    <div className="mt-20">
      <header className="flex flex-wrap justify-evenly  bg-gray-500">
        <div>
          <h6 className="text-2xl text-yellow-500">Crypto Hunter</h6>
        </div>
        <div className="border text-2xl text-right">
          <select onChange={handleOnChange} value={currency}>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </header>

      <div className="flex flex-wrap mt-20 mb-20 ml-5">
        {favoriteCoins.map((coin) => {
          return (
            <div key={coin.id} className="w-40">
              <Link to={`/coins/${coin.id}`}>
                <div className="max-w-xs">
                  <img src={coin.image} alt={coin.id} className="w-20 h-20" />
                  <span>
                    {coin.symbol.toUpperCase()}{" "}
                    {coin.price_change_percentage_24h.toFixed(2) + "%"}
                  </span>
                  <p>{coin.current_price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <h1 className="text-3xl mb-10">Cryptocurrency Prices by Market Cap</h1>
      </div>
      <table className="table-auto ml-10 mr-10 w-full">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change </th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return (
              <tr key={coin.id} className="text-center h-10">
                <td>
                  <Link to={`/coins/${coin.id}`}>
                    {coin.symbol} {coin.name}
                  </Link>
                </td>
                <td>
                  <Link to={`/coins/${coin.id}`}>{coin.current_price}</Link>
                </td>

                <td>
                  <Link to={`/coins/${coin.id}`}>{coin.price_change_24h}</Link>
                </td>
                <td>
                  <Link to={`/coins/${coin.id}`}>{coin.market_cap}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="text-center">
        <button
          className="mr-10"
          onClick={() => {
            setPageNo(pageNo - 1);
            handlePageClick(pageNo - 1);
          }}
        >
          Prev
        </button>
        <span>{pageNo}</span>
        <button
          className="ml-10"
          onClick={() => {
            setPageNo(pageNo + 1);
            handlePageClick(pageNo + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
