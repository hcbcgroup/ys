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
      data-user_entered_at={new Date(Date.now()).toLocaleString()}
    >
      <Header />
      <OrderOnline>
        <a
          href="https://direct.chownow.com/order/20071/locations/28924"
          target={'_blank'}
          className="shadow-2xl animate-bounce bg-gradient-to-r from-highlighter via-red-500 to-red-600 px-3 py-2 border border-highlighter"
          rel="noreferrer"
        >
          Order Online
        </a>
      </OrderOnline>
      <main className="w-full relative">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
