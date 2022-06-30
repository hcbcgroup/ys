/**
 * react
 */
import { useEffect } from 'react';
/**
 * components
 */
import OrderOnline from '@components/reuse/OrderOnline';
import Footer from './footer.layout';
import Header from './header.layout';
/**
 * local interfaces & types
 */
interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    /**
     * Web Accessibility
     * User Way
     */
    (function () {
      const s = document.createElement('script');
      s.setAttribute('data-account', 'FwPGZvtcmF');
      s.setAttribute('src', 'https://cdn.userway.org/widget.js');
      document.body.appendChild(s);
    })();
  }, []);
  return (
    <div className="relative min-h-screen" id="yuchanshokudo-layout">
      <Header />
      <main className="w-full relative">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
