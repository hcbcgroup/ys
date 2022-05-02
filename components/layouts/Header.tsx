import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectHelper } from "../../data/helper";
import type { NavigationProps } from "../../interfaces/componentPropTypes";
import DesktopNavigation from "../utils/DesktopNavigation";
import HeadLogo from "../utils/HeadLogo";
import MobileNavigation from "../utils/MobileNavigation";

const Header: React.FC<NavigationProps> = ({ links }) => {
  const [scroller, setScroller] = useState<Boolean>(false);
  const onScroll = () => {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      setScroller(true);
    } else {
      setScroller(false);
    }
  };
  useEffect(() => {
    window.onscroll = () => {
      onScroll();
    };
  }, [scroller]);
  return (
    <header className={
      ProjectHelper.onStateChangeClassJoin(
        'w-full fixed top-0 transition-all z-40',
        scroller
        ? 'shadow-sm shadow-slate-200 backdrop-blur-sm bg-slate-50/80'
        : 'shadow-none backdrop-blur-none bg-white/0'
      )
    }>
      <section className={
        ProjectHelper.onStateChangeClassJoin(
          'flex justify-between items-center px-8 py-4 lg:py-2 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-b border-transparent transition-all',
          scroller
          ? 'lg:py-4'
          : 'border-transparent'
        )
      }>
        <HeadLogo scroller={scroller} />
        <DesktopNavigation links={links} />
        <MobileNavigation links={links} />
      </section>
    </header>
  );
};

export default Header;
