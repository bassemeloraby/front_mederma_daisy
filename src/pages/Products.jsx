import React, { Fragment } from 'react'
import { ComplexPaginationContainer, Filters, ProductsContainer } from '../components'

const Products = () => {
  return (
    <Fragment>
    <Filters />
   <ProductsContainer/>
   <ComplexPaginationContainer/>
  </Fragment>
  )
}

export default Products