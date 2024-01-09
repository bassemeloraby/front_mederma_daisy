import React, { Fragment } from "react";
import { DrugsList } from "../components";

import { customFetch } from "../utils";
const url = "/allDrugs";

export const loader = async ({ request }) => {
    const response = await customFetch(url);
    const products = response.data;
    console.log(products)
    return {products}
}

const Drugs = () => {
  return (
    <Fragment>
      <DrugsList />
    </Fragment>
  );
};

export default Drugs;
