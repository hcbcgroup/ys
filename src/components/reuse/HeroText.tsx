/**
 * libs
 */
import reactClassname from '@lib/reactClassname';
/**
 * next
 */
import { useRouter } from 'next/router';
/**
 * react
 */
import { useEffect, useState } from 'react';
/**
 * local interfaces & types
 */
interface HeroTextProps {
  children: JSX.Element;
}
const HeroText: React.FC<HeroTextProps> = ({ children }) => {
  const router = useRouter();
  const [animateText, setAnimateText] = useState<boolean | 'initial'>(
    'initial'
  );
  useEffect(() => {
    setTimeout(() => {
      setAnimateText(false);
    }, 300);
    setAnimateText(true);
  }, [router]);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <section
        className={reactClassname(
          'p-8 py-32 transition-all transform ease-out',
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
export default HeroText;
