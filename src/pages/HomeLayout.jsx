import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Fragment>
      <nav>
        <span className="text-4xl text-primary">MEDERMA</span>
      </nav>
      <section className="align-element py-20">
          <Outlet />
        </section>
    </Fragment>
  );
};

export default HomeLayout;
