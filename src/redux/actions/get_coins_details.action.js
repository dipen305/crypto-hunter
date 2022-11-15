import { GET_COINS_DETAILS } from "../action.types";

export const getCoinsDetails = (currency) => async (dispatch) => {
  
  console.log("currency",currency)
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${currency}`;

  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    dispatch({
      type: GET_COINS_DETAILS,
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
