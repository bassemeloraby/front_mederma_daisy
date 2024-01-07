import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const HomeLayout = () => {
  return (
    <Fragment>
    <Header />
     
      <section className="align-element py-20">
          <Outlet />
        </section>
    </Fragment>
  );
};

export default HomeLayout;
