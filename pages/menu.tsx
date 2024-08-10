/**
 * components
 */
import HeroText from "@components/reuse/HeroText";
// import OrderOnline from "@components/reuse/OrderOnline";
import PageSEO from "@seo/page.seo";
/**
 * next
 */
import type { NextPage } from "next";
/**
 * react
 */
import React from "react";
/**
 * icons
 */
import { BiFoodMenu } from "react-icons/bi";
const Menupage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO
        title="Menu"
        description="Explore Yuchan Shokudo's menu items on Donburi, Ramen, and beverages."
      />
      <HeroText>
        <>
          {" "}
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
            Yuchan Shokudo Menu
          </h2>
          <p className="block font-sans w-max mx-auto text-center">
            <a
              href={"/yuchanshokudo_menu_v7.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="border-highlighter border-b-2 text-highlighter px-4 pb-3 text-lg font-bold flex items-center space-x-2 transition-all hover hover:text-texter hover:border-texter"
            >
              <BiFoodMenu className="text-xl" />
              <span>Open Full Menu</span>
            </a>
          </p>
        
        </>
      </HeroText>
    </React.Fragment>
  );
};
export default Menupage;
