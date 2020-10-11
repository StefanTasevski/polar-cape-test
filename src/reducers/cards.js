import {
    GET_CARDS_LIST,
    GET_CARD_TYPE_LIST
  } from "../actions/cardAction";
  
  let initialState = {
    getCardsList: false,
    errorCardsList: false,
    getCardTypeList: false,
    errorCardTypeList: false,
    title: "Card List",
  };
  
  const cards = (state = initialState, action) => {
    switch (action.type) {
      case GET_CARDS_LIST:
        return {
          ...state,
          getCardsList: action.payload.data.cards,
          errorCardsList: action.payload.errorMessage,
        };

      case GET_CARD_TYPE_LIST:
          return {
            ...state,
            getCardTypeList: action.payload.data.types,
            errorCardTypeList: action.payload.errorMessage,
          };
    
  
      default:
        return state;
    }
  };
  
  export default cards;