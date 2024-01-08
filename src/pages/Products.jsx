import React, { Fragment } from "react";
import {
  ComplexPaginationContainer,
  Filters,
  ProductsContainer,
} from "../components";

import { customFetch } from "../utils";
const url = "/allDrugs";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data;
  const meta = {
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 3,
      total: products.length,
    },
  };

  console.log("products", products.length);
  console.log(meta.pagination);
  return { products, meta };
};

const Products = () => {
  return (
    <Fragment>
      <Filters />
      <ProductsContainer />
      <ComplexPaginationContainer />
    </Fragment>
  );
};

export default Products;
