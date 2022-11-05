import React, { createContext, useState } from 'react'


export const CartContext = createContext();


//Cuando con un componente envuelvo a otros componentes, éstos
//me llegan al primero (al que envuelve a otros) con una prop llamada CHILDREN
//Si quiero que eso se vuelva a renderizar en pantalla, tengo que ponerlo dentro
//del componente
export default function CartProvider ({children}) {

    
    const [cart, setCart] = useState([]) //Mi lista de productos del carro


    //ADD TO CART 
    const addToCart = (item, qty) => { 
        if(!isInCart (item.id)) setCart([...cart, {...item, qty}])
        else{setCart(cart.map( product => { //IF IT IS NOT IN MY CART, THEN ADD IT
                        if(product.id === item.id) return {...product, qty: product.qty + qty}
                        else return product;
                    }))
        }   
    }

    //CHECK ITEM
    const isInCart = (id) => cart.find(product => product.id === id)


    //CLEAR CART
    const clearCart = () => setCart([]);


    //REMOVE FROM CART
    const removeItemFromCart = (id) => setCart(cart.filter(product => product.id !== id))    

    
    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeItemFromCart}}>
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