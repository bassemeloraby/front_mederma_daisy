import React from "react";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";

const Filters = ({search}) => {
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
    </Form>
  );
};

export default Filters;
