import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { NavigationProps } from "../../interfaces/componentPropTypes";
import { MdOutlineMenu, MdRestaurantMenu } from "react-icons/md";
import { ProjectHelper } from "../../data/helper";
import { BsBoxArrowRight } from "react-icons/bs";
import LinkToChowNow from "./LinkToChowNow";
import Feeds from "./Feeds";
import { useRouter } from "next/router";
const MobileNavigation: React.FC<NavigationProps> = ({ links }) => {
  const router = useRouter();
  const [mobileMenuToggle, setMobileMenuToggle] = useState<boolean>(false);
  useEffect(() => {
    setMobileMenuToggle(false);
  }, [router]);
  return (
    <React.Fragment>
      <nav className={
        ProjectHelper.onStateChangeClassJoin(
          'lg:hidden transition-all',
          mobileMenuToggle 
          ? 'opacity-0'
          : 'opacity-100'
        )
      }>
        <button
          onClick={() => ProjectHelper.onMobileMenuToggle(setMobileMenuToggle)}
        >
          <MdOutlineMenu className="text-4xl" />
        </button>
      </nav>
      {/* {mobileMenuToggle && ( */}
        <nav className={
          ProjectHelper.onStateChangeClassJoin(
            'lg:hidden fixed z-50 w-10/12 left-0 top-0 backdrop-blur-xl bg-slate-50/100  h-screen flex flex-col justify-center items-center shadow-lg  transition-all transform translate-x-0 ',
            mobileMenuToggle
            ? 'transition-all ease-out transform translate-x-0  shadow-slate-800/30'
            : 'transition-all ease-in transform -translate-x-full shadow-transparent'
          )
        }>
          <button
            className={
              ProjectHelper.onStateChangeClassJoin(
                'fixed z-50 right-8 top-4 text-slate-800 text-4xl transitiion-all transform focus focus:rotate-180',
                mobileMenuToggle
                ? 'opacity-100'
                : 'opacity-0'
              )
            }
            onClick={() =>
              ProjectHelper.onMobileMenuToggle(setMobileMenuToggle)
            }
          >
            <MdOutlineMenu />
          </button>
          <section className="w-full p-8 text-slate-600 flex flex-col space-y-4">
            {links.map((link, index) => (
              <Link key={index} href={link.pageTo}>
                <a className="font-medium text-2xl flex space-x-2 items-center">
                  <span>{link.pageText}</span>
                  <BsBoxArrowRight className="text-base" />
                </a>
              </Link>
            ))}
            <LinkToChowNow className="w-full flex space-x-2 justify-center font-bold items-center text-center px-3 py-2 text-blue-500 border-2 border-blue-500">
              <React.Fragment>
                <span>Order Online For Pickup</span>
                <MdRestaurantMenu />
              </React.Fragment>
            </LinkToChowNow>
            <Feeds className="w-full flex flex-col items-center pt-4 text-slate-900" />
          </section>
        </nav>
      {/* )} */}
    </React.Fragment>
  );
};

export default MobileNavigation;
