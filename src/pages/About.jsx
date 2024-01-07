import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              mederma
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Hi, my name is bassem , I am a web-developer and pharmacist .
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        is under developing and I created it to help any pharmacist in his work
        with defrent sitution he get in his work as prescriptions an Insurance .
        I hope you enjoing the experince with our website and helping us to know
        about the needs of every pharmacist in his job .
      </p>
    </Fragment>
  );
};

export default About;
