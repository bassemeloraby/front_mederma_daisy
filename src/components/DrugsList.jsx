import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { Virtuoso } from "react-virtuoso";
import noPhoto from "../assets/noPhoto.jpg"
const DrugsList = () => {
  const { products } = useLoaderData();

  return (
    <div className='mt-12 grid gap-y-8'>
    <Virtuoso
    style={{ height: "600px", background: "#f8f8f8" }}
    data={products}
    totalCount={products.length}
    itemContent={(index, product) => (
      
      <Link
      // key={product.id}
      to={`/products/${product._id}`}
      className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
    >
      <img
        src={noPhoto}
        alt={product.TradeName}
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
      />
      <div className='ml-0 sm:ml-16'>
        <h3 className='capitalize font-medium text-lg'>{product.TradeName}</h3>
        <h4 className='capitalize text-md text-neutral-content'>
          {product.ScientificName}
        </h4>
      </div>
      <p className='font-medium ml-0 sm:ml-auto text-lg'>
        {product.PublicPrice}
      </p>
    </Link>
    )}
    />
    </div>
  )
}

export default DrugsList