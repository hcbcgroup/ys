/* eslint-disable @next/next/no-img-element */
/**
 * components
 */
import IndexDineIn from "@components/index/IndexDineIn";
import HeroText from "@components/reuse/HeroText";
import OrderOnline from "@components/reuse/OrderOnline";
import PageSEO from "@seo/page.seo";
/**
 * next
 */
import type { NextPage } from "next";
/**
 * react
 */
import React from "react";

const Homepage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO />
      <HeroText>
        <>
          <div
            id="index-image-container"
            className="w-full overflow-hidden mb-8"
          >
            <img
              src="yuchanshokudo_location.jpg"
              className="w-full h-full"
              alt="Yuchan Shokudo Location Image"
            />
          </div>
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl pb-4">
            Authentic & Homestyle Japanese Cuisine
          </h2>
          <OrderOnline>
            <a
              href="https://direct.chownow.com/order/20071/locations/28924"
              target={"_blank"}
              className="shadow-2xl font-medium bg-red-700 px-8 py-3 text-lg lg:text-xl border border-red-700 md:hover hover:bg-red-600"
              rel="noreferrer"
            >
              Order Online
            </a>
          </OrderOnline>
        </>
      </HeroText>
      <IndexDineIn />
    </React.Fragment>
  );
};
export default Homepage;
