import axios from "axios";

export const GET_CARDS_LIST = "GET_CARDS_LIST";
export const GET_CARD_TYPE_LIST = "GET_CARD_TYPE_LIST";

export const getCardsList = () => {
  return (dispatch) => {
    axios
      .get("https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English")
      .then(function (response) {
        dispatch({
          type: GET_CARDS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_CARDS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getCardTypeList = () => {
  return (dispatch) => {
    axios
      .get("https://api.magicthegathering.io/v1/types")
      .then(function (response) {
        dispatch({
          type: GET_CARD_TYPE_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_CARD_TYPE_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

