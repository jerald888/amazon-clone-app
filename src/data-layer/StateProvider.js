import React, {createContext, useContext, useReducer} from "react" /* 4.4 */ // **** React has no {}



// preapares the data layer
export const StateContext = createContext();/* 4.4 */

// wrap our app and provide datalayer to all components
export const StateProvider /* **** check camel case spelling */ = ({ reducer, initialState, children }) => {
    return( /* 4.4 ***** this return is important..... elsse blank page */

    <StateContext.Provider value = {useReducer( reducer, initialState )}>
        {children}
    </StateContext.Provider> /* 4.4 */
    )
     
}
// pulls the info from data layer
export const useStateValue = () => useContext(StateContext);/* 4.4 */