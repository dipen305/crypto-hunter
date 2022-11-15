import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoinsDetails } from "../redux/actions/get_coins_details.action";
export default function CoinDetailPage() {
  const { id } = useParams();
  let { coinsDetail } = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoinsDetails(id));
  }, []);

  return (
    <div>
      <div className="mt-20 ml-20">
        {coinsDetail && (
          <>
            <img src={coinsDetail?.image?.large}></img>
            <div className="mt-10">
              <span>{coinsDetail.name}</span>
              <p>{coinsDetail?.description?.en}</p>
              <p>Rank: {coinsDetail.market_cap_rank}</p>
              <p>
                Current Price: {coinsDetail?.market_data?.current_price["inr"]}
              </p>
              <p>Market Cap: {coinsDetail?.market_data?.market_cap["inr"]}</p>
            </div>
          </>
        )}
      </div>
      <div></div>
    </div>
  );
}
