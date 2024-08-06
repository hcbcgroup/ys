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

  const ramens = ['tokyo_shoyu_ramen', 'spicy_tan_tan_ramen', 'chicken_shio_butter_ramen', 'pork_tonkotsu_ramen', 'extreme_spicy_tan_tan_ramen', 'extreme_kakuni_tonkotsu_ramen'];
  const noodles = ['beef_udon_noodle', 'pork_yakisoba_noodle', 'chilled_vegetable_soba_salad_noodle'];
  const hotRices = ['pork_shogayaki_teishoku', 'kurobuta_pork_roast_katsu_teishoku', 'ny_steak_teriyaki_beef_donburi', 'chicken_karaage_curry_platter', 'chashu_cha_han_fried_rice', 'pork_belly_chashu_donburi', 'brussels_vegetable_donburi'];
  const coldRices = ['double_spicy_tuna_donburi', 'tuna_poke_donburi'];
  const appetizers = ['kaki_furai', 'ikageso_age', 'kurobuta_pork_roast_katsu_appetizer', 'berry_kanten'];
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
            {ramens.map((each, idx) => (
                 <section
                 className={reactClassname(
                   "w-full h-full flex flex-col jsutify-center items-center md:items-center"
                 )}
                 key={idx}
               >
                 <a
                   className={reactClassname("w-full")}
                   href={`/gallery/img/ramens/${each.toString()}.jpg`}
              
                   target={"_blank"}
                   rel="noopener noreferrer"
                 
                 >
                   {" "}
                   <img
                     className={reactClassname("w-full")}
                     src={`/gallery/img/ramens/${each.toString()}.jpg`}
                     alt={`Yuchan Shokudo | ${each.split("_").join(" ")}`}
                   />
                 </a>
               </section>
            ))}
   {noodles.map((each, idx) => (
                 <section
                 className={reactClassname(
                   "w-full h-full flex flex-col jsutify-center items-center md:items-center"
                 )}
                 key={idx}
               >
                 <a
                   className={reactClassname("w-full")}
                   href={`/gallery/img/noodles/${each.toString()}.jpg`}
                   
                   target={"_blank"}
                   rel="noopener noreferrer"
                 
                 >
                   {" "}
                   <img
                     className={reactClassname("w-full")}
                     src={`/gallery/img/noodles/${each.toString()}.jpg`}
                     alt={`Yuchan Shokudo | ${each.split("_").join(" ")}`}
                   />
                 </a>
               </section>
            ))}
              {hotRices.map((each, idx) => (
                 <section
                 className={reactClassname(
                   "w-full h-full flex flex-col jsutify-center items-center md:items-center"
                 )}
                 key={idx}
               >
                 <a
                   className={reactClassname("w-full")}
                   href={`/gallery/img/rices/hot/${each.toString()}.jpg`}
                   
                   target={"_blank"}
                   rel="noopener noreferrer"
                 
                 >
                   {" "}
                   <img
                     className={reactClassname("w-full")}
                     src={`/gallery/img/rices/hot/${each.toString()}.jpg`}
                     alt={`Yuchan Shokudo | ${each.split("_").join(" ")}`}
                   />
                 </a>
               </section>
            ))}
              {coldRices.map((each, idx) => (
                 <section
                 className={reactClassname(
                   "w-full h-full flex flex-col jsutify-center items-center md:items-center"
                 )}
                 key={idx}
               >
                 <a
                   className={reactClassname("w-full")}
                   href={`/gallery/img/rices/cold/${each.toString()}.jpg`}
                   
                   target={"_blank"}
                   rel="noopener noreferrer"
                 
                 >
                   {" "}
                   <img
                     className={reactClassname("w-full")}
                     src={`/gallery/img/rices/cold/${each.toString()}.jpg`}
                     alt={`Yuchan Shokudo | ${each.split("_").join(" ")}`}
                   />
                 </a>
               </section>
            ))}
                {appetizers.map((each, idx) => (
                 <section
                 className={reactClassname(
                   "w-full h-full flex flex-col jsutify-center items-center md:items-center"
                 )}
                 key={idx}
               >
                 <a
                   className={reactClassname("w-full")}
                   href={`/gallery/img/appetizers/${each.toString()}.jpg`}
                   
                   target={"_blank"}
                   rel="noopener noreferrer"
                 
                 >
                   {" "}
                   <img
                     className={reactClassname("w-full")}
                     src={`/gallery/img/appetizers/${each.toString()}.jpg`}
                     alt={`Yuchan Shokudo | ${each.split("_").join(" ")}`}
                   />
                 </a>
               </section>
            ))}
          </div>
        </>
      </HeroText>
    </React.Fragment>
  );
};
export default Gallerypage;
