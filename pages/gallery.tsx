/* next types & interfaces */
import { NextPage } from "next";
import React from "react";
import Container from "../components/utils/Container";
import PageTitle from "../components/utils/PageTitle";

const Gallerypage: NextPage = () => {
  return (
    <div id="layout-gallery" className="w-full">
      <Container
        containerClass="w-full bg-backgrounderBold/90"
        sectionClass="w-full flex flex-col justify-center items-center min-h-screen"
      >
        <PageTitle 
          title="Gallery Of Yuchan"
          description="View our restaurant & how our customers fall in love with this place."
        />
      </Container>
    </div>
  );
};

export default Gallerypage;
