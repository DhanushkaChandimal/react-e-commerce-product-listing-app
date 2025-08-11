import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [products, setProducts] = useState([
    {
      id: "001",
      name: "Wireless Mouse",
      price: "19.99",
      description: "Ergonomic wireless mouse with adjustable DPI and USB receiver.",
      category: "Electronics"
    },
    {
      id: "002",
      name: "Bluetooth Headphones",
      price: "49.99",
      description: "Over-ear noise-cancelling headphones with 20 hours battery life.",
      category: "Electronics"
    },
    {
      id: "003",
      name: "Water Bottle",
      price: "12.50",
      description: "Reusable stainless steel water bottle with 750ml capacity.",
      category: "Home & Kitchen"
    },
    {
      id: "004",
      name: "Yoga Mat",
      price: "25.00",
      description: "Non-slip yoga mat with carrying strap, 6mm thick.",
      category: "Sports & Outdoors"
    },
    {
      id: "005",
      name: "Desk Lamp",
      price: "29.99",
      description: "LED desk lamp with adjustable brightness and color temperature.",
      category: "Home Office"
    },
    {
      id: "006",
      name: "Smartwatch",
      price: "199.99",
      description: "Fitness tracking smartwatch with heart rate monitor and GPS.",
      category: "Electronics"
    },
    {
      id: "007",
      name: "Backpack",
      price: "34.99",
      description: "Durable backpack with multiple compartments and laptop sleeve.",
      category: "Travel & Accessories"
    },
    {
      id: "008",
      name: "Coffee Maker",
      price: "89.00",
      description: "Automatic drip coffee maker with programmable timer.",
      category: "Home Appliances"
    },
    {
      id: "009",
      name: "Running Shoes",
      price: "69.99",
      description: "Lightweight running shoes with breathable mesh upper.",
      category: "Sportswear"
    },
    {
      id: "010",
      name: "Portable Speaker",
      price: "39.99",
      description: "Water-resistant Bluetooth speaker with deep bass.",
      category: "Electronics"
    }
  ]);

  return (
    <>
      <h1>Product List</h1>
      <ProductList products={products}/>
    </>
  )
}

export default App
