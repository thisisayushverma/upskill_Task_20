import React, { useState } from 'react'
import { PaymentCart } from '../Cart'
import useCartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';


function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const { cartData, total } = useCartContext();
    return (
        <>
            <h2 className="text-4xl text-center w-full font-semibold m-4">Select Payment Method</h2>
            <div className='flex justify-between   p-8'>
                <div className='w-full h-[70vh] relative '>
                    <div className=" p-3 w-fit flex align-center gap-50  ">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                defaultValue={true}
                                checked={paymentMethod === "cod"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-5 h-5 text-blue-500 focus:ring-2 focus:ring-blue-300"
                            />
                            <span className="text-gray-700">Cash on Delivery (COD)</span>
                        </label>

                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-5 h-5 text-blue-500 focus:ring-2 focus:ring-blue-300"
                            />
                            <span className="text-gray-700">Card Payment</span>
                        </label>
                    </div>


                    {paymentMethod === "card" && (
                        <div className="m-6 p-4 border rounded-lg transition-all bg-gray-100">
                            <h3 className="text-lg font-medium mb-3">Enter Card Details</h3>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Cardholder Name"
                                    className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300"
                                />
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-1/2 px-3 py-2 border rounded focus:ring focus:ring-blue-300"
                                    />
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        className="w-1/2 px-3 py-2 border rounded focus:ring focus:ring-blue-300"
                                    />
                                </div>

                            </div>
                        </div>
                    )}

                    <button className=" bg-blue-500 absolute bottom-0 left-0 right-0 m-3 text-white p-2  rounded hover:bg-blue-600 transition-all">
                        Pay Now
                    </button>
                </div>
                <div className='w-2/5 h-fit p-5 border-2 rounded-2xl bg-[#e2e2e2]' >
                    <div className='font-bold text-3xl text-center m-2'>Cart</div>
                    <div className='max-h-[50vh] relative overflow-y-auto pr-4'>
                        {
                            cartData.length === 0 ?
                            <h1 className='text-center text-xl font-medium p-4'>😔<br/>Cart is empty....</h1> 
                            :
                                cartData.map((item) => (<PaymentCart key={item.id} id={item.id} item={item} />))
                        }
                    </div>

                    <h1 className='text-2xl text-center m-2 font-bold my-5'>Total: ${total}</h1>
                    <Link to="/" className='block w-full'>
                        <div className='text-center w-fit text-2xl font-bold border-2 p-3 my-2 mx-auto'>
                            Move to Cart
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Payment
