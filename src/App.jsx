import React, { useState } from 'react'
import Product from './Components/Product'
import ProductList from './Components/ProductList'
import Payment from './Components/Payment'
import Display from './Components/Display'
import Refund from './Components/Refund'


const productsData = [
  { id: 1, name: "Chips", price: 10 },
  { id: 2, name: "Soda", price: 20 },
  { id: 3, name: "Chocolate", price: 30 },
];


function App() {
  const [message, setMessage] = useState("");
  return (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <h1>Vending Machine</h1>

  <ProductList products={productsData}  setMessage={setMessage} ></ProductList>
  <Payment  setMessage={setMessage} ></Payment>

  <Refund  setMessage={setMessage} ></Refund>
  <Display  message={message} ></Display>
  
  </div>
  )
}

export default App
