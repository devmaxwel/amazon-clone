export const initialState ={
    basket:[]
}

export const reducer =(state={ basket:[]},action)=>{
    console.log(action)
        switch(action.type){
            case "ADD_TO_BASKET":
            return {
              ...state,
              basket: [...state.basket, {...action.payload}],
            };

            default:
                return state;
        }
}