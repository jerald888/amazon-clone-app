export const initialState = {
    basket: [], /* 4.5 */
}; /* 4.5 */

// 6.1 selector 

export const getBasketTotal = (basket) =>
 /*   6.1 **** no curly {} here, else error */    basket?.reduce((amount, object) => amount + object.price, 0) /* 6.1 comma , 0 means initial value....we can set an initial value after a comma */
    



const reducer = (state, action) => { /* 4.5 */
console.log({action})
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        default:
            return state;
    }
}

export default reducer; /* 4.5 */