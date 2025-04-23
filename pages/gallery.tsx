/* eslint-disable @next/next/no-img-element */
/**
 * components
 */
import MenuImage from "@components/gallery/MenuImage";
import HeroText from "@components/reuse/HeroText";
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
  const menu ={
    "regular items": ['pork_tonkotsu_ramen', 'new_aromatic_spicy_tantan_ramen', 'chicken_shio_butter_ramen', 'tokyo_shoyu_ramen', 'chashu_donburi', 'brussels_vegetable_donburi', 'ikageso_age', 'kaki_fry'],
    "special": {
      "appetizers & dessert": ['kurobuta_roast_pork_katsu_appetizer', 'spicy_gyoza_salad', 'berry_kanten'],
      "dish": {
        "noodle": ["pork_yakisoba", 'beef_gyuuniku_udon','hiyashi_chuuka' ,'vegetable_soba_salad'],
        "rice": ['double_spicy_tuna_donburi', 'tuna_poke_donburi', 'teriyaki_steak_donburi', 'kurobuta_curry', 'pork_kurobuta_roast_katsu_teishoku', 'spicy_pirikara_pork_butashogayaki_teishoku', 'pork_butashogayaki_teishoku']
      }
    }  
  }

  return (
    <React.Fragment>
      <PageSEO
        title="Gallery"
        description="Explore images and description of some of our popular menus."
      />
      <HeroText>
        <>
          {" "}
       
          <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl mb-10 ">
            Gallery Of Yuchan Shokudo
          </h2>


          <ul className="flex flex-col gap-y-12 lg:gap-y-16">
          <div >
            <h3 className="font-semibold tracking-[0.025rem] uppercase text-2xl lg:text-5xl mb-5 lg:mb-8 2xl:mb-12">Regular Items</h3>
          <section id="regularitems" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menu['regular items'].map((each, idx) => (

<MenuImage key={idx} imagePath={['gallery', 'image', 'regular']} imageName={each} />
              
            ))}
          </section>
          </div>
          <div >
            <h3 className="font-semibold tracking-[0.025rem] uppercase text-2xl lg:text-5xl mb-5 lg:mb-8 2xl:mb-12">Special Appetizers & Dessert</h3>
          <section id="regularitems" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menu['special']['appetizers & dessert'].map((each, idx) => (
               <MenuImage key={idx} imagePath={['gallery', 'image', 'special', 'appetizers&dessert']} imageName={each} />
            ))}
          </section>
          </div>
          <div >
            <h3 className="font-semibold tracking-[0.025rem] uppercase text-2xl lg:text-5xl mb-5 lg:mb-8 2xl:mb-12">Special Dishes</h3>
          <section id="regularitems" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menu['special']['dish']['noodle'].map((each, idx) => (
              <MenuImage key={idx} imagePath={['gallery', 'image', 'special', 'dishes', 'noodle']} imageName={each} />
            ))}
             {menu['special']['dish']['rice'].map((each, idx) => (
                   <MenuImage key={idx} imagePath={['gallery', 'image', 'special', 'dishes', 'rice']} imageName={each} />
            ))}
          </section>
          </div>
          </ul>
        </>
      </HeroText>
    </React.Fragment>
  );
};
export default Gallerypage;
