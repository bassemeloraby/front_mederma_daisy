import { Link, useLoaderData } from 'react-router-dom';

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { TradeName, PublicPrice, image, company } = product;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product._id}
            to={`/products/${product.id}`}
            className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
          >
            <img
              src={image}
              alt={TradeName}
              className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
            />
            <div className='ml-0 sm:ml-16'>
              <h3 className='capitalize font-medium text-lg'>{TradeName}</h3>
              <h4 className='capitalize text-md text-neutral-content'>
                {company}
              </h4>
            </div>
            <p className='font-medium ml-0 sm:ml-auto text-lg'>
              {PublicPrice}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;