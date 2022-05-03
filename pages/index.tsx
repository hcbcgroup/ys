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
        containerClass="bg-backgrounderBold/90 backdrop-blur-xl w-full relative z-20"
        sectionClass="flex flex-col h-screen justify-center items-center"
      >
        <React.Fragment>
        <h2 className="hero-title font-bold text-5xl lg:text-6xl 2xl:text-7xl text-center mb-4">
          Fine Dine-in, in Davis
        </h2>
        <nav className="hero-secondary flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center mt-4">
          <Link href="/menu">
            <a className="w-full md:w-max text-center px-8 py-3 text-lg font-semibold  bg-highlighter/75 rounded-lg shadow-md transition-all transform hover hover:translate-y-2 hover:bg-highlighter/95">
              <span>Our Menu</span>
            </a>
          </Link>
          <LinkToChowNow className="w-full md:w-max text-center px-8 py-3 text-lg font-semibold bg-highlighter/75 rounded-lg shadow-md transition-all transform hover hover:translate-y-2 hover:bg-highlighter/95">
            <span>Order & Pickup</span>
          </LinkToChowNow>
        </nav>
        </React.Fragment>
      </Container>
      <Container
              containerClass="bg-backgrounderBold backdrop-blur-xl w-full relative z-20"
              sectionClass="flex flex-col min-h-screen justify-start items-center"
      >
        <React.Fragment>
        <h3 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold">Dine-in At Yuchan</h3>
        <div className="w-full bg-transparent relative mt-16 ">
          {/* <article className="absolute bg-slate-300/60 left-0 top-0 w-12 h-12 animate-spin rounded-xl" />
          <article className="absolute bg-slate-100/60 right-0 top-0 w-12 h-12 animate-spin rounded-xl" /> */}
          <article className="w-full mx-auto  grid grid-cols-1 lg:grid-cols-2 backdrop-blur-lg bg-zinc-900/50 rounded-xl shadow-2xl border border-backgrounderBold p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 transition-all">
            <div className="text-texter/75">
              <h4 className="text-3xl font-bold mb-4 text-texter/90">Open Hours</h4>
              <p className="italic mb-8">Holiday business hours are subject to change.</p>
              <article></article>
            </div>
            <div className="w-full text-texter/75">
              <h4 className="text-3xl font-bold mb-4 text-texter/90">Our Location</h4>
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
