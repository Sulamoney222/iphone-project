import React, { useContext, useEffect, useReducer } from "react";
import { cartItems } from "../constants";
import Reducer from "./Reducer";


const AppContext = React.createContext()

export const AppProvider = ({children})=>{

  
    
    const initialState = {
        totalAmount: 0,
        cart: cartItems,
        Loading: true,
        total: 0
    }

    const [state, dispatch] = useReducer(Reducer, initialState)
   
    const clearItem = ()=>{
        dispatch({type: 'CLEAR'})
    }
    const remove = (id)=>{
        dispatch({type: 'REMOVE', payload: id})
    }
    const increase = (id)=>{
        dispatch({type:'INCREASE', payload: id})
    }
    const decrease = (id)=>{
        dispatch({type:'DECREASE', payload: id})
    }
    useEffect(()=>{
   dispatch({type: 'TOTAL'})
  
    }, [state.cart])

    return(
        <AppContext.Provider
    value={{
        ...state,
        clearItem,
        remove,
        increase,
        decrease

    }}>
        {children}
    </AppContext.Provider>
    )

}


export const UseGlobalContext = () =>{
    return useContext(AppContext)
}



