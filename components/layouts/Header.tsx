import { useEffect, useState } from 'react';
import { ProjectHelper } from '../../data/helper';
import DesktopNavigation from '../utils/DesktopNavigation';
import HeadLogo from '../utils/HeadLogo';
import MobileNavigation from '../utils/MobileNavigation';

interface LinkProps {
  pageTo: string;
  pageText: string;
}

const Header: React.FC<{ links: LinkProps[] }> = ({ links }) => {
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
    <header
      className={ProjectHelper.onStateChangeClassJoin(
        'w-full fixed top-0 transition-all z-40',
        scroller
          ? 'border-slate-600 border-opacity-25 backdrop-blur-sm bg-backgrounderBold/70'
          : 'shadow-none backdrop-blur-none bg-transparent'
      )}
    >
      <section
        className={ProjectHelper.onStateChangeClassJoin(
          'flex justify-between items-center px-8 py-4 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-b border-transparent transition-all',
          scroller ? 'lg:py-4' : 'border-transparent'
        )}
      >
        <HeadLogo scroller={scroller} />
        <DesktopNavigation links={links} />
        <MobileNavigation links={links} />
      </section>
    </header>
  );
};

export default Header;
