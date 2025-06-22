import React from 'react'

const Reducer = ( state, action) => {
    if(action.type === 'CLEAR'){
        return {...state, cart:[]}
    }
    if(action.type === 'REMOVE'){
        return {...state, 
            cart:state.cart.filter((cartS) => cartS.id !== action.payload),
        }
    }
    if(action.type === 'INCREASE'){
       let allCart = state.cart
       .map((carts)=>{
       if(carts.id === action.payload){
        return {...carts, amount : carts.amount +1}
       }
       return carts
       })
       
       return{...state, cart: allCart}
    }

    //Decreasing

    if(action.type === 'DECREASE'){
        let allCart = state.cart
        .map((carts)=>{
        if(carts.id === action.payload){
         return {...carts, amount : carts.amount -1}
        }
        return carts
        })
        .filter((carts)=> carts.amount !== 0)
        return{...state, cart: allCart}
     }

    if(action.type=== 'TOTAL'){
        let {total, totalAmount} =state.cart.reduce((cartTotal, cartItem)=>{
            
             
            const {price, amount} = cartItem
             const itemTotal = price * amount

             cartTotal.total += itemTotal
             cartTotal.totalAmount += amount
             return cartTotal
        },{
            total:0,
            totalAmount:0
        })
      total = parseFloat(total.toFixed(2))
        return {...state, total, totalAmount}
    } 

    return state
}

export default Reducer
// 