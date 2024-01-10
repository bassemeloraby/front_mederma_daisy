import React from "react";

import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { customFetch } from "../utils";
import noPhoto from "../assets/noPhoto.jpg";

const url = "/allDrugs";

export const loader = async ({ params }) => {
  const response = await customFetch(`${url}/${params.id}`);

  console.log(response.data[0]);
  return { product: response.data[0] };
};

const SingleDrug = () => {
  const { product } = useLoaderData();
  const { _id, TradeName, ScientificName, PublicPrice } = product;

  return (
    <section>
      {" "}
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {" "}
        {/* IMAGE */}
        <img
          src={noPhoto}
          alt={TradeName}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{TradeName}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {ScientificName}
          </h4>

          <p className="mt-3 text-xl">{PublicPrice} SR</p>
        </div>
      </div>
    </section>
  );
};

export default SingleDrug;
