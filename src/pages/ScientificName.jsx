import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const url = "/allDrugs";


export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data;
  console.log(products);
  return { products };
};

const ScientificName = () => {
  const { product } = useLoaderData();
  const { ScientificName } = useParams();

  return (
    <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
      <div>
        <h4 className="text-xl text-neutral-content font-bold mt-2">
          {ScientificName}
        </h4>
      </div>
    </div>
  );
};

export default ScientificName;
