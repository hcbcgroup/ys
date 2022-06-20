import reactClassname from '@lib/reactClassname';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
interface OrderOnlineProps {
  children: JSX.Element;
}
const OrderOnline: React.FC<OrderOnlineProps> = ({ children }) => {
  const router = useRouter();
  const [animateText, setAnimateText] = useState<boolean | 'initial'>(
    'initial'
  );
  useEffect(() => {
    setTimeout(() => {
      setAnimateText(false);
    }, 600);
    setAnimateText(true);
  }, [router]);
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
      <section
        className={reactClassname(
          'transition-all transform ease-out',
          animateText === 'initial'
            ? 'hidden'
            : animateText
            ? 'opacity-0 translate-y-10'
            : 'opacity-100 translate-y-0'
        )}
      >
        {children}
      </section>
    </div>
  );
};
export default OrderOnline;
