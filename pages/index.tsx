/* next types & interfaces */
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Container from "../components/utils/Container";
import LinkToChowNow from "../components/utils/LinkToChowNow";
import Map from "../components/utils/Map";

const Homepage: NextPage = () => {
  return (
    <div id="layout-index" className="w-full relative z-30">
      <Container
        containerClass="bg-white/0 w-full relative z-20"
        sectionClass="flex flex-col h-screen justify-center items-center"
      >
        <React.Fragment>
        <h2 className="hero-title font-bold text-5xl text-center">
          Fine Dine-in, in Davis
        </h2>
        <nav className="hero-secondary flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 items-center mt-4">
          <Link href="/menu">
            <a className="w-full md:w-max text-center px-6 py-2 text-xl font-semibold border-b-4 border-slate-600 transition-all backdrop-blur-none hover hover:bg-black/50 hover:border-black/50 hover:text-slate-100 hover:backdrop-blur-xl">
              <span>Our Menu</span>
            </a>
          </Link>
          <LinkToChowNow className="w-full md:w-max text-center text-xl  px-6 py-2 font-semibold border-b-4 border-slate-600 backdrop-blur-none hover hover:bg-black/50 hover:border-black/50 hover:text-slate-100 hover:backdrop-blur-xl">
            <span>Order & Pickup</span>
          </LinkToChowNow>
        </nav>
        </React.Fragment>
      </Container>
      <Container
              containerClass="bg-zinc-50/95 w-full relative z-20 text-slate-700"
              sectionClass="flex flex-col min-h-screen justify-start items-center"
      >
        <React.Fragment>
        <h3 className="text-4xl font-bold">Dine-in At Yuchan</h3>
        <div className="w-full bg-transparent relative mt-16 ">
          {/* <article className="absolute bg-slate-300/60 left-0 top-0 w-12 h-12 animate-spin rounded-xl" />
          <article className="absolute bg-slate-100/60 right-0 top-0 w-12 h-12 animate-spin rounded-xl" /> */}
          <article className="w-full mx-auto  grid grid-cols-1 lg:grid-cols-2 backdrop-blur-lg bg-slate-50/40 rounded-xl shadow-xl border border-slate-200 p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 transition-all">
            <div>
              <h4 className="text-3xl font-bold mb-4 text-slate-700">Open Hours</h4>
              <p className="text-slate-400 italic mb-8">Holiday business hours are subject to change.</p>
              <article></article>
            </div>
            <div className="w-full">
              <h4 className="text-3xl font-bold mb-4 text-slate-700">Our Location</h4>
              <p className="flex flex-col md:flex-row md:space-x-2 items-start md:items-center mb-1">
                <span className="font-bold">Address</span>
                <span>109 E St, Davis, CA 95616</span>
              </p>
              <p className="flex flex-col md:flex-row  md:space-x-2 items-start md:items-center mb-4">
                <span className="font-bold">Business Contact</span>
                <span>(530) 753-3196</span>
              </p>
              <Map className="w-full max-w-screen overflow-x-auto bg-white rounded-xl border-8 border-slate-100" />
            </div>
          </article>
        </div>
        </React.Fragment>
      </Container>
    </div>
  );
};

export default Homepage;
