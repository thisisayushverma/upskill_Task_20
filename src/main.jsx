import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements,createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Payment from './components/Payment/Payment.jsx'
import Main from './components/Main/Main.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Main/>}/>
      <Route path='payment' element={<Payment/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
