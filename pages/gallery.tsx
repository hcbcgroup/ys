/* eslint-disable @next/next/no-img-element */
/**
 * components
 */
import HeroText from "@components/reuse/HeroText";
import reactClassname from "@lib/reactClassname";
import PageSEO from "@seo/page.seo";
/**
 * next
 */
import type { NextPage } from "next";
/**
 * react
 */
import React from "react";

const Gallerypage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO
        title="Gallery"
        description="Explore images and description of some of our popular menus."
      />
      <HeroText>
        <>
          {" "}
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-8 lg:mb-12">
            Gallery Of Yuchan Shokudo
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(
              (each, index) => (
                <section
                  className={reactClassname(
                    "w-full h-full flex flex-col jsutify-center items-center md:items-center"
                  )}
                  key={index}
                >
                  <a
                    className={reactClassname("w-full")}
                    href={`/gallery/pdf/${each.toString()}.jpg`}
                    
                    target={"_blank"}
                    rel="noopener noreferrer"
                  
                  >
                    {" "}
                    <img
                      className={reactClassname("w-full")}
                      src={`/gallery/pdf/${each.toString()}.jpg`}
                      alt={`yuchanshokudo gallery pdf ${index}`}
                    />
                  </a>
                </section>
              )
            )}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
              (each, index) => (
                <section
                  className={reactClassname(
                    "w-full h-full flex flex-col jsutify-center items-center md:items-center"
                  )}
                  key={index}
                >
                  <a
                    className={reactClassname("w-full")}
                    href={`/gallery/img/${each.toString()}.jpg`}
                    
                    target={"_blank"}
                    rel="noopener noreferrer"
                  
                  >
                    {" "}
                    <img
                      className={reactClassname("w-full")}
                      src={`/gallery/img/${each.toString()}.jpg`}
                      alt={`yuchanshokudo gallery image ${index}`}
                    />
                  </a>
                </section>
              )
            )}
          </div>
        </>
      </HeroText>
    </React.Fragment>
  );
};
export default Gallerypage;
