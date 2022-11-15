import { GET_FAVORITE_COINS } from "../action.types";
export const getFavoriteCoins = (currency) => async (dispatch) => {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
  
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    dispatch({
      type: GET_FAVORITE_COINS,
      payload: data,
    });
    // dispatch({
    //   type: ON_PAGE_CHANGE,
    //   payload: {totalPage: 501} // temporary setting it to 500
    // });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: NEWS_FAILURE,
    //   payload: e.message,
    // });
  }
};

