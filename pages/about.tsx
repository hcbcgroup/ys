import IndexDineIn from '@components/index/IndexDineIn';
import HeroText from '@components/reuse/HeroText';
import PageSEO from '@seo/page.seo';
import type { NextPage } from 'next';
import React from 'react';

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
        </>
      </HeroText>
    </React.Fragment>
  );
};
export default Aboutpage;
