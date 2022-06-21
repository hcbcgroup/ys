/* eslint-disable @next/next/no-img-element */
import IndexDineIn from '@components/index/IndexDineIn';
import HeroText from '@components/reuse/HeroText';
import OrderOnline from '@components/reuse/OrderOnline';
import PageSEO from '@seo/page.seo';
import type { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import StoreLocationImage from '../public/yuchanshokudo_location.jpg';

const Homepage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Home" />
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
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-2">
            Authentic & Homestyle Japanese Cuisine
          </h2>
          <p className="font-normal text-center md:text-right text-lg md:text-xl lg:text-2xl">
            We&apos;re Yuchan Shokudo
          </p>
          <OrderOnline>
            <a
              href="https://direct.chownow.com/order/20071/locations/28924"
              target={'_blank'}
              className="shadow-2xl font-medium bg-highlighter px-8 py-3 text-lg lg:text-xl border border-highlighter md:hover hover:bg-red-600"
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
