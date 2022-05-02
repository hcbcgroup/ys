/* next types & interfaces */
import { NextPage } from "next";
import React from "react";
import Container from "../components/utils/Container";

const Menupage: NextPage = () => {
  return (
    <div id="layout-menu" className="w-full">
      <Container
        containerClass="w-full"
        sectionClass="w-full flex flex-col justify-center items-center min-h-screen"
      >
        <React.Fragment>
          <h2 className="hero-title font-bold text-5xl text-center mb-4">
            Yuchan&apos;s Menu
          </h2>
          <p className="hero-secondary text-center">Sort the menu by categories now!</p>
        </React.Fragment>
      </Container>
    </div>
  );
};

export default Menupage;
