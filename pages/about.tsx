/* next types & interfaces */
import { NextPage } from "next";
import React from "react";
import Container from "../components/utils/Container";

const Aboutpage: NextPage = () => {
  return (
    <div id="layout-about" className="w-full">
      <Container
        containerClass="w-full"
        sectionClass="w-full flex flex-col justify-center items-center min-h-screen"
      >
        <React.Fragment>
          <h2 className="hero-title font-bold text-5xl text-center mb-4">
            Our Stories
          </h2>
          <p className="hero-secondary text-center">Learn about our stories & how you can enjoy your time being here.</p>
        </React.Fragment>
      </Container>
    </div>
  );
};

export default Aboutpage;
