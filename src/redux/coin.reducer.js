
const initialState = {

  coins: [],
  coinsDetail: [],
  favoriteCoins: [],
  pagination:{
    currentPage:1,
    totalPage:1,
    total_results:1
  }
};
export const coinReducer = (state = initialState,action) => {
    switch (action.type) {
      case "GET_COINS":
        return {
          ...state,
          coins: action.payload,
        };
      case "GET_COINS_DETAILS":
        return {
          ...state,
          coinsDetail: action.payload,
        };
      case "GET_FAVORITE_COINS":
        return {
          ...state,
          favoriteCoins: action.payload,
        };
      case "ON_PAGE_CHANGE":
        return {
          ...state,
          pagination: { ...state.pagination, ...action.payload },
        };

      default:
        return state;
    }
};
