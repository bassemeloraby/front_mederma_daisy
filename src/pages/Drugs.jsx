import React, { Fragment, useState } from "react";
import { DrugsList, FormInput } from "../components";

import { customFetch } from "../utils";
const url = "/allDrugs";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data;
  console.log(products);
  return { products };
};

const Drugs = () => {
  const [query, setQuery] = useState();
console.log()
  return (
    <Fragment>
      <FormInput label="search"  type="text" placeholder="enter trade name or scientific name" setQuery={setQuery}/>
      <DrugsList query={query}/>
    </Fragment>
  );
};

export default Drugs;
