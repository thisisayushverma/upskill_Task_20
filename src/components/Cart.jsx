import { useState } from "react"
import useCartContext from "../context/cartContext";
import "../App.css"


function Cart({id, item }){
    // console.log("hey Cart component",item);
    const {cartData,setCartData,setTotal} = useCartContext();
    const incQuantity = () =>{
        // console.log("Incrementing item:", item.id);
        // console.log(cartData);
        setCartData(prevCart=>
            prevCart.map((cartItem)=> cartItem.id === id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1 
            } : cartItem)
        )
        setTotal((prev)=> Math.round((prev+item.price)*100)/100)
    }

    const decQuantity = () =>{
        setCartData((prevCart)=>
            prevCart.map((item)=> item.id === id ? {
                ...item,
                quantity: item.quantity - 1 
            } : item).filter((item)=> item.quantity > 0)
            )
            setTotal((prev)=> Math.round((prev-item.price)*100)/100)
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



//  cart for Payment section

export function PaymentCart({id, item }){


    return (
        <>
        <div className='cart'>
            <img src={item.image_url}>
            </img>
            <div className="cart-description mx-1">
                <h3 className="font-bold text-2xl">{item.name}</h3>
                <div className="flex gap-2 m-2 font-medium ">
                    <p>${item.price} X</p>
                    <p>{item.quantity}</p>
                </div>
            </div>
            <h1 className="font-bold m-auto">{item.quantity * item.price}</h1>
        </div>
        </>
    )
}


