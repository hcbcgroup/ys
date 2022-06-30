/**
 * components
 */
import FAQ from '@components/about/FAQ';
import IndexDineIn from '@components/index/IndexDineIn';
import HeroText from '@components/reuse/HeroText';
import PageSEO from '@seo/page.seo';
/**
 * next
 */
import type { NextPage } from 'next';
/**
 * react
 */
import React from 'react';
/**
 * icons
 */
import { VscArrowDown } from 'react-icons/vsc';

const Aboutpage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="About Us" />
      <HeroText>
        <>
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8">
            Mission Statement & Who We Are
          </h2>
          <p className="font-normal max-w-xl mx-auto leading-8 lg:leading-9 xl:leading-10 text-center text-xl md:text-2xl lg:text-3xl">
            <strong>Yuchan Shokudo</strong>,{' '}
            <em className="font-light">
              formerly Yakitori Yuchan, established 2014 in Davis, CA,
            </em>{' '}
            <span>
              aim to provide authentic, home-style Japanese cuisine in the form
              of ramen and donburi to the Davis and Sacramento area.
            </span>
          </p>
          <div className="flex items-center justify-center mt-8">
            <a
              href="#frequently-asked-questions"
              className="flex px-4 py-2 items-center space-x-4 border-b-2 text-gray-500 border-gray-500 transition-all hover:text-gray-200 hover:border-gray-300/70 lg:text-lg font-bold"
            >
              <span>Frequently Asked Questions</span>
              <VscArrowDown className="animate-bounce" />
            </a>
          </div>
        </>
      </HeroText>
      <FAQ />
    </React.Fragment>
  );
};
export default Aboutpage;
