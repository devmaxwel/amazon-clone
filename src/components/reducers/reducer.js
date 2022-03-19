
export const initialState = {
  basket:[],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, curr) => {
    return curr.price + acc;
  }, 0);

export const reducer = (state = { basket: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, { ...action.payload }],
      };
        
    case "REMOVE_FROM_BASKET":
        return{
            ...state,
            basket:state.basket.filter((b)=> b.id !== action.payload)
        }

    default:
      return state;
  }
};
