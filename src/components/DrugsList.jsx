import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";
import noPhoto from "../assets/noPhoto.jpg";
const DrugsList = ({ query }) => {
  const { products } = useLoaderData();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!query) setItems(products);
    setItems((_) =>
      products.filter(
        (x) =>
          x.ScientificName.toLowerCase().includes(query?.toLowerCase()) ||
          x.TradeName.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, products]);

  useEffect(() => {
    setItems(products);
  }, [products]);

  return (
    <div className="mt-6 grid gap-y-8">
      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={items}
        totalCount={products.length}
        itemContent={(index, product) => {
          const { _id, TradeName, ScientificName, PublicPrice } = product;
          return (
            <Link
              // key={product.id}
              to={`/drugs/${_id}`}
              className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            >
              <img
                src={noPhoto}
                alt={TradeName}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="ml-0 sm:ml-16">
                <h3 className="capitalize font-medium text-lg">{TradeName}</h3>
                <h4 className="capitalize text-md text-neutral-content">
                  {ScientificName}
                </h4>
              </div>
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                {PublicPrice}
              </p>
            </Link>
          );
        }}
      />
    </div>
  );
};

export default DrugsList;
