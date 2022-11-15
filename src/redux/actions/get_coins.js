import { GET_ACTOR_DETAILS, GET_COINS } from "../action.types";

export const getCoins = (currency,page) => async (dispatch) => {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log("Coins data",data);
    dispatch({
      type: GET_COINS,
      payload: data,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: NEWS_FAILURE,
    //   payload: e.message,
    // });
  }
};
