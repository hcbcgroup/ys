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
    </aside>
  );
};
export default MobileAside;
