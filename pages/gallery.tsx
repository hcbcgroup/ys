/* next types & interfaces */
import { NextPage } from "next";
import React from "react";
import Container from "../components/utils/Container";

const Gallerypage: NextPage = () => {
  return (
    <div id="layout-gallery" className="w-full">
      <Container
        containerClass="w-full"
        sectionClass="w-full flex flex-col justify-center items-center min-h-screen"
      >
        <React.Fragment>
          <h2 className="hero-title font-bold text-5xl text-center mb-4">
            Gallery Of Yuchan
          </h2>
          <p className="hero-secondary text-center">View our restaurant & how our customers fall in love with this place.</p>
        </React.Fragment>
      </Container>
    </div>
  );
};

export default Gallerypage;
