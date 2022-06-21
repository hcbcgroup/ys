import OrderOnline from '@components/reuse/OrderOnline';
import { useEffect } from 'react';
import Footer from './footer.layout';
import Header from './header.layout';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  /**
   * Web Accessibility
   * User Way
   */
  useEffect(() => {
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
