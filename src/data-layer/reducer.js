export const initialState = {
    basket: [], /* 4.5 */
    user: null /* 7.4 */
}; /* 4.5 */

// 6.1 selector 

export const getBasketTotal = (basket) =>
 /*   6.1 **** no curly {} here, else error */    basket?.reduce((amount, object) => amount + object.price, 0) /* 6.1 comma , 0 means initial value....we can set an initial value after a comma */
    



const reducer = (state, action) => { /* 4.5 */
console.log({action})
    switch(action.type) { /* 4.5 */
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        default:
            return state;
        
        case "REMOVE_FROM_BASKET": /* 6.3 */
            let newBasket = [...state.basket]; // we make a new array because, we use SPLICE array method which will modify the original array

            let index = state.basket.findIndex(
                (basketItem) =>/*  { */
                    basketItem.id === action.id
                /* } */ // never put a curly {} around a single line arrow function
            )  /* 6.3 */

            if ( index >= 0 ) {
                    newBasket.splice( index, 1 )
            } else {
                console.warn(`can't remove the product (id : ${action.id}) as it is not inside the basket!`)
            }

             /* 6.3 */

            return {
                ...state, 
                basket: newBasket
            }  /* 6.3 */
        
        case "SET_USER": /* 7.4 */
            return { /* 7.4 */
                ...state,
                user: action.user
            }

    }
}

export default reducer; /* 4.5 */