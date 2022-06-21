import OrderOnline from '@components/reuse/OrderOnline';
import reactClassname from '@lib/reactClassname';

interface MobileAsideProps {
  asideOpen: boolean;
  children: JSX.Element;
}
const MobileAside: React.FC<MobileAsideProps> = ({ asideOpen, children }) => {
  return (
    <aside
      className={reactClassname(
        'md:hidden fixed w-full h-screen bg-backgrounderBold/50 border-2 backdrop-blur-md shaodw-xl top-0 z-50 left-0 transition-all transform flex flex-col justify-center',
        asideOpen
          ? 'translate-x-0 border-texter'
          : '-translate-x-full border-transparent'
      )}
    >
      <section className="p-8 flex flex-col justify-center">{children}</section>
      <OrderOnline>
        <a
          href="https://direct.chownow.com/order/20071/locations/28924"
          target={'_blank'}
          className="shadow-2xl font-medium bg-highlighter px-8 py-3 text-lg lg:text-xl border border-highlighter md:hover hover:bg-red-600"
          rel="noreferrer"
        >
          Order Online
        </a>
      </OrderOnline>
    </aside>
  );
};
export default MobileAside;
