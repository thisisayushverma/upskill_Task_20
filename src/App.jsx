import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import { useState } from 'react'

function App() {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <>
      <CartProvider value={{ cartData, setCartData, total, setTotal }}>
        <Header />
        <Outlet />
      </CartProvider>

    </>
  )
}

export default App
