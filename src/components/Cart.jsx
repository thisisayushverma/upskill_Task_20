import { useState } from "react"

function Cart({id, item ,cartData, setCart}){
    console.log("hey Cart component",item);

    const incQuantity = () =>{
        console.log("Incrementing item:", item.id);
        console.log(cartData);
        setCart(prevCart=>
            prevCart.map((cartItem)=> cartItem.id === id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1 
            } : cartItem)
        )
    }

    const decQuantity = () =>{
        setCart((prevCart)=>
            prevCart.map((item)=> item.id === id ? {
                ...item,
                quantity: item.quantity - 1 
            } : item).filter((item)=> item.quantity > 0)
            )
        }
    return (
        <>
        <div className='cart'>
            <img src={item.image_url}>
            </img>
            <div className="cart-description">
                <h3>{item.name}</h3>
                <div className="cart-price">
                    <p>${item.price}</p>
                    <div>
                        <button onClick={decQuantity}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={incQuantity}>+</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart