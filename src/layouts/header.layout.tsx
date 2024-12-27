/**
 * lib
 */
import reactClassname from "@lib/reactClassname";
/**
 * next
 */
import Link from "next/link";
import { useRouter } from "next/router";
/**
 * react
 */
import React, { useState, useEffect } from "react";
/**
 * components
 */
import MobileAside from "./mobile-aside.layout";
/**
 * icons
 */
import { FiArrowRight } from "react-icons/fi";
import { SiYelp, SiFacebook, SiInstagram } from "react-icons/si";
/**
 * local interfaces & types
 */
type LinkType = {
  href: string;
  textContent: string;
};
type LinkListType = LinkType[];

const LINKS: LinkListType = [
  { href: "/", textContent: "home" },
  { href: "/menu", textContent: "menu" },
  { href: "/gallery", textContent: "gallery" },
  { href: "/about", textContent: "about" },
];
const ORDERLINK: LinkType = {
  href: "https://direct.chownow.com/order/20071/locations/28924",
  textContent: "order online",
};

const Header: React.FC = () => {
  const [asideOpen, setAsideOpen] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    asideOpenHandler(false);
  }, [router.pathname]);
  const asideOpenHandler = (statusTo: boolean) => {
    setAsideOpen(statusTo);
  };
  return (
    <React.Fragment>
      <MobileAside asideOpen={asideOpen}>
        <>
          <>
            <span
              onClick={() => asideOpenHandler(false)}
              className={reactClassname(
                "fixed top-8 right-4 z-50 h-1 transform transition-all",
                asideOpen
                  ? "rotate-45 w-10 translate-x-0 bg-texter"
                  : "w-0 translate-x-full bg-transparent"
              )}
            />
            <span
              onClick={() => asideOpenHandler(false)}
              className={reactClassname(
                "fixed top-8 right-4 z-50  h-1 transform transition-all",
                asideOpen
                  ? "-rotate-45 w-10 translate-x-0 bg-texter"
                  : "w-0 translate-x-full bg-transparent"
              )}
            />
          </>
          <h3 className="font-bold text-2xl text-center mb-6 pb-4 border-b-2">
            Yuchan Shokudo
          </h3>
          <ul className="flex flex-col space-y-4">
            {LINKS.map((eachLink, linkIndex) => (
              <li key={linkIndex}>
                <Link href={eachLink.href}>
                  <a
                    className={reactClassname(
                      "capitalize flex items-center gap-x-4 transition-all text-lg",
                      router.pathname === eachLink.href
                        ? "text-texter"
                        : "text-texter/50"
                    )}
                  >
                    <FiArrowRight />
                    <span>{eachLink.textContent}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t-2 mt-6 pt-4">
            <h4 className="font-medium text-lg sm:text-xl mb-4">
              Connect With Yuchan Shokudo!
            </h4>
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  className="inline-flex items-center gap-x-4 capitalize transition-all duration-[0.35s] border-l-0 pl-0 hover:border-l-8 hover:pl-4"
                  href="https://www.facebook.com/YuchanShokudo/"
                >
                  <SiFacebook className="text-xl" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-x-4 capitalize transition-all duration-[0.35s] border-l-0 pl-0 hover:border-l-8 hover:pl-4"
                  href="https://www.instagram.com/yuchanshokudo/"
                >
                  <SiInstagram className="text-xl" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-x-4 capitalize transition-all duration-[0.35s] border-l-0 pl-0 hover:border-l-8 hover:pl-4"
                  href="https://www.yelp.com/biz/yakitori-yuchan-davis-6"
                >
                  <SiYelp className="text-xl" />
                  <span>Yelp</span>
                </a>
              </li>
            </ul>
          </div>
        </>
      </MobileAside>
      <header className="w-full fixed top-0 z-40 bg-gradient-to-b  from-backgrounder/95 to-backgrounderBold md:bg-transparent backdrop-blur-sm">
        <section className="flex justify-between items-center px-4 lg:px-8 py-4 md:py-4">
          <h1
            className={reactClassname(
              "flex flex-col items-center justify-center transition-all hover hover:text-white/50"
            )}
          >
            <Link href="/">
              <a className="font-bold text-xl">Yuchan Shokudo</a>
            </Link>
          </h1>
          <nav
            data-nav_for="mobile"
            className={reactClassname(
              "flex items-center transition-all md:hidden z-50",
              asideOpen ? "space-x-0" : "space-x-4"
            )}
          >
            <Link href="/menu">
              <a className="text-lg px-4 py-1 border-2">Menu</a>
            </Link>
            <button
              onClick={() => asideOpenHandler(true)}
              className="flex flex-col items-center space-y-2 relaitve z-50"
            >
              <span
                className={reactClassname(
                  "h-1 bg-texter transition-all",
                  asideOpen ? "w-0" : "w-8"
                )}
              />
              <span
                className={reactClassname(
                  "h-1 bg-texter transition-all",
                  asideOpen ? "w-0" : "w-8"
                )}
              />{" "}
              <span
                className={reactClassname(
                  "h-1 bg-texter transition-all",
                  asideOpen ? "w-0" : "w-8"
                )}
              />
            </button>
          </nav>
          <nav
            data-nav_for="desktop"
            className="hidden md:flex items-center space-x-4 xl:space-x-6"
          >
            {LINKS.map((eachLink, linkIndex) => (
              <Link key={linkIndex} href={eachLink.href}>
                <a
                  className={reactClassname(
                    "capitalize transition-all relative z-50",
                    router.pathname === eachLink.href
                      ? "text-texter"
                      : "text-texter/50"
                  )}
                >
                  {eachLink.textContent}
                </a>
              </Link>
            ))}
          </nav>
        </section>
      </header>
    </React.Fragment>
  );
};
export default Header;
