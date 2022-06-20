import HeroText from '@components/reuse/HeroText';
import OrderOnline from '@components/reuse/OrderOnline';
import PageSEO from '@seo/page.seo';
import type { NextPage } from 'next';
import React from 'react';
import MenuFile from '../public/yuchanshokudo_menu_v1.pdf';
import { BiFoodMenu } from 'react-icons/bi';
const Menupage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Gallery" />
      <HeroText>
        <>
          {' '}
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
            Yuchan Shokudo Menu
          </h2>
          <code className="block w-max mx-auto text-center">
            <a
              href={MenuFile}
              target="_blank"
              rel="noopener noreferrer"
              className="border-highlighter border-b-2 text-highlighter px-4 pb-3 text-lg font-serif font-bold flex items-center space-x-2 transition-all hover hover:text-texter hover:border-texter"
            >
              <BiFoodMenu className="text-xl" />
              <span>Open Full Menu</span>
            </a>
          </code>
        </>
      </HeroText>
    </React.Fragment>
  );
};
export default Menupage;
