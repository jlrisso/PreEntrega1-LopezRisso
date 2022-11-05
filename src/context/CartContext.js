import React, { createContext, useState } from 'react'


export const CartContext = createContext();


//Cuando con un componente envuelvo a otros componentes, éstos
//me llegan al primero (al que envuelve a otros) con una prop llamada CHILDREN
//Si quiero que eso se vuelva a renderizar en pantalla, tengo que ponerlo dentro
//del componente
export default function CartProvider ({children}) {


        



    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>

    )
}












/*

/*setCart(() => {
                if (!isInCart(item.id)) return [...cart, {...item, qty}]  
                else {  return cart.map( product => {
                            if(product.id === item.id) return {...product, qty: product.qty + qty}
                            else return product;
                        })
                }
            })



*/