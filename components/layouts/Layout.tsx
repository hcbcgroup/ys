import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { links } from "../../data/links";
import type { LayoutComponentProps } from "../../interfaces/componentPropTypes";
import LinkToChowNow from "../utils/LinkToChowNow";
import Footer from "./Footer";
import Header from "./Header";
import {FaUtensils} from "react-icons/fa";

const Layout: React.FC<LayoutComponentProps> = ({ children }) => {
  const router = useRouter();
  const [route, setRoute] = useState<string>("");
  useEffect(() => {
      setRoute(router.pathname.split("/").join(""));
  }, [router])
  return (
    <div id="layout" className="w-full relative">
      <Header links={links.internal} />
      <main>{children}</main>
      <Footer />
      {route && (
        <LinkToChowNow className="fixed bottom-8 flex items-center space-x-2 right-8 z-30 bg-blue-600 px-8 py-4 text-lg font-medium text-slate-100 border-2 border-blue-600 rounded-lg animate-bounce shadow-sm transition-all hover hover:bg-blue-400 hover:shadow-2xl hover:border-blue-400">
          <React.Fragment>
          <span>Order For Pickup</span>
          <FaUtensils />
          </React.Fragment>
        </LinkToChowNow>
      )}
    </div>
  );
};

export default Layout;
