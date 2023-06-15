import React from 'react'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Cart from './pages/Cart.jsx'

const App = () => {
  return (
    <div>
      <Home />
      <CategoryPage />
      <ProductPage />
      <Cart/>
    </div>
  )
}

export default App
