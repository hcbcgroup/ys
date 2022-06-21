import OrderOnline from '@components/reuse/OrderOnline';
import Footer from './footer.layout';
import Header from './header.layout';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="relative min-h-screen"
      id="yuchanshokudo-layout"
      data-rendered_at={new Date(Date.now()).toLocaleString()}
    >
      <Header />
      <main className="w-full relative">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
