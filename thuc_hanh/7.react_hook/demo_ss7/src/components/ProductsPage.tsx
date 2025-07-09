import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductsPage() {
  return (
    <div>
      <h2>ProductsPage</h2>
      <Outlet />
    </div>
  )
}

export default ProductsPage