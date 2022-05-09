/* next types & interfaces */
import { NextPage } from 'next';
import React from 'react';
import Container from '../components/utils/Container';
import MenuOpenerLink from '../components/utils/MenuOpenerLink';
import PageTitle from '../components/utils/PageTitle';

const Menupage: NextPage = () => {
  return (
    <div id="layout-menu" className="w-full">
      <Container
        containerClass="w-full bg-backgrounderBold/90"
        sectionClass="w-full flex flex-col justify-center items-center min-h-screen"
      >
        <React.Fragment>
          <PageTitle
            title="Yuchan's Menu"
            description="Sort the menu by categories now!"
          />
          <MenuOpenerLink className="menu-opener px-8 py-3 mt-8 font-medium text-xl bg-highlighter rounded-lg transition-all hover hover:backdrop-blur-lg hover:bg-highlighter/70" />
        </React.Fragment>
      </Container>
    </div>
  );
};

export default Menupage;
