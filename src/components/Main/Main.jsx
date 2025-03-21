import {React,useState} from 'react'
import Card from '../Card'
import Cart from '../Cart'
import "../../App.css"
import { Link } from 'react-router-dom'

function Main() {

    const data = [
        {
          "id":1,
          "name": "Nike Air Max 270",
          "price": 149.99,
          "image_url": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
          "id":2,
          "name": "Adidas Ultraboost",
          "price": 179.99,
          "image_url": "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
          "id":3,
          "name": "Puma RS-X",
          "price": 120.00,
          "image_url": "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
          "id":4,
          "name": "Reebok Classic Leather",
          "price": 89.99,
          "image_url": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
          "id":5,
          "name": "New Balance 574",
          "price": 99.99,
          "image_url": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
          "id":6,
          "name": "Under Armour HOVR Phantom",
          "price": 140.00,
          "image_url": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
      ]
    
      const [cartData,setCartData] = useState([])
      const [total,setTotal] = useState(0)

  return (
    <main>
        <section className='card-Section'>
          {
            data.map((item,key)=>{
              return <Card  key={key} item={item} 
              addToCart={cartData}
              setCart={setCartData}
              setTotal={setTotal}/>
            })
          }
        </section>
        
        <section className='cart-Section flex flex-col'>
          <h1>Cart</h1>
          <div className='cart-Container'>
          {cartData.length > 0 ? cartData.map((item,key)=>{
            return <Cart 
            key={key} 
            item={item} 
            id={item.id} 
            cartData= {cartData} 
            setCart={setCartData}
            setTotal={setTotal}
            />
          }) : null}
          </div>

          <h1 className='total-class'> Total:${total}</h1>
          <Link className='mx-auto' to="/payment">
          <button className=' bordered border-2  cursor-pointer p-2 px-5 bg- text-center'>Proceed to Payment</button>
          </Link>
        </section>
      </main>
  )
}

export default Main
