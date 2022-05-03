/* next types & interfaces */
import { NextPage } from "next";
import React from "react";
import Container from "../components/utils/Container";
import PageTitle from "../components/utils/PageTitle";

const Aboutpage: NextPage = () => {
  return (
    <div id="layout-about" className="w-full">
      <Container
        containerClass="w-full bg-backgrounderBold/90"
        sectionClass="w-full flex flex-col justify-center items-center min-h-screen"
      >
        <PageTitle 
          title="Our Stories"
          description="Learn about our stories & how you can enjoy your time being here."
        />
      </Container>
    </div>
  );
};

export default Aboutpage;
