/* next types & interfaces */
import { NextPage } from "next";
import React from "react";
import Container from "../components/utils/Container";
import PageTitle from "../components/utils/PageTitle";

const Menupage: NextPage = () => {
  return (
    <div id="layout-menu" className="w-full">
      <Container
        containerClass="w-full bg-backgrounderBold/90"
        sectionClass="w-full flex flex-col justify-center items-center min-h-screen"
      >
        <PageTitle 
          title="Yuchan's Menu"
          description="Sort the menu by categories now!"
        
        />
      </Container>
    </div>
  );
};

export default Menupage;
