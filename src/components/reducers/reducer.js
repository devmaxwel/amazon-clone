
export const initialState = {
  basket:[],
  user:null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, curr) => {
    return curr.price + acc;
  }, 0);

export const reducer = (state , action) => {
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

    case "EMPTY_BASKET":
      return {
        ...state,
        basket:[]
      }

    case "SET_USER":
        return{
           ...state,
           user:action.payload
        }

    default:
      return state;
  }
};
