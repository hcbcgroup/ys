import reactClassname from '@lib/reactClassname';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import MobileAside from './mobile-aside.layout';
import { FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
/**
 * @type
 */
type LinkType = {
  href: string;
  textContent: string;
};
/**
 * @type
 */
type LinkListType = LinkType[];
/**
 * @global
 */
const LINKS: LinkListType = [
  { href: '/', textContent: 'home' },
  { href: '/menu', textContent: 'menu' },
  { href: '/gallery', textContent: 'gallery' },
  { href: '/about', textContent: 'about' },
];
const SOCIALLINKS: LinkListType = [
  { href: '#', textContent: 'facebook' },
  { href: '#', textContent: 'instagram' },
  { href: '#', textContent: 'yelp' },
];
const ORDERLINK: LinkType = {
  href: 'https://direct.chownow.com/order/20071/locations/28924',
  textContent: 'order online',
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
                'absolute top-12 right-8  h-1 bg-texter transform transition-all',
                asideOpen ? 'rotate-45 w-10' : '-rotate-180 w-0'
              )}
            />
            <span
              onClick={() => asideOpenHandler(false)}
              className={reactClassname(
                'absolute top-12 right-8  h-1 bg-texter transform transition-all',
                asideOpen ? '-rotate-45 w-10' : 'rotate-180 w-0'
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
                      'capitalize font-medium flex items-center space-x-2 transition-all text-2xl',
                      router.pathname === eachLink.href
                        ? 'text-texter'
                        : 'text-texter/50'
                    )}
                  >
                    <span>{eachLink.textContent}</span>
                    <FiArrowRight />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t-2 mt-6 pt-4">
            <h4 className="font-normal text-xl mb-4">
              Or visit our social media
            </h4>
            <ul className="flex flex-col space-y-2 ">
              {SOCIALLINKS.map((eachLink, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    className="font-medium capitalize underline"
                    href={eachLink.href}
                  >
                    {eachLink.textContent}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      </MobileAside>
      <header className="w-full fixed top-0 z-40 bg-gradient-to-b  from-backgrounder to-backgrounderBold md:bg-transparent backdrop-blur-sm">
        <section className="flex justify-between items-center px-8 py-8 md:py-4">
          <h1
            className={reactClassname(
              'flex flex-col items-center justify-center transition-all hover hover:text-white/50'
            )}
          >
            <Link href="/">
              <a className="font-bold text-xl">Yuchan Shokudo</a>
            </Link>
          </h1>
          <nav
            data-nav_for="mobile"
            className={reactClassname(
              'flex items-center transition-all md:hidden',
              asideOpen ? 'space-x-0' : 'space-x-4'
            )}
          >
            <Link href="/menu">
              <a className="text-lg px-4 py-1 border-2">Menu</a>
            </Link>
            <button
              onClick={() => asideOpenHandler(true)}
              className="flex flex-col items-center space-y-2"
            >
              <span
                className={reactClassname(
                  'h-1 bg-texter transition-all',
                  asideOpen ? 'w-0' : 'w-8'
                )}
              />
              <span
                className={reactClassname(
                  'h-1 bg-texter transition-all',
                  asideOpen ? 'w-0' : 'w-8'
                )}
              />{' '}
              <span
                className={reactClassname(
                  'h-1 bg-texter transition-all',
                  asideOpen ? 'w-0' : 'w-8'
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
                    'capitalize transition-all',
                    router.pathname === eachLink.href
                      ? 'text-texter'
                      : 'text-texter/50'
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
