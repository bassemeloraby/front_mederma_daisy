import React, { useState } from "react";

import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { customFetch } from "../utils";
const url = "/allDrugs";

export const loader = async ({ params }) => {
  const response = await customFetch(`${url}/${params.id}`);

  console.log(response.data[0])
  return { product: response.data[0] };
};

const SingleDrug = () => {
  return <div>SingleDrug</div>;
};

export default SingleDrug;
