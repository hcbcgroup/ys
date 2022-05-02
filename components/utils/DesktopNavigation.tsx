import Link from "next/link";
import type { NavigationProps } from "../../interfaces/componentPropTypes";
import LinkToChowNow from "./LinkToChowNow";

const DesktopNavigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
      <section className="flex space-x-2 lg:space-x-3 xl:space-x-4">
        {links.map((link, index) => (
          <Link key={index} href={link.pageTo}>
            <a className="transition-all  hover hover:text-slate-600 font-medium">{link.pageText}</a>
          </Link>
        ))}
      </section>
      <LinkToChowNow className="font-bold">
        <span className="px-3 py-2 border-2 border-slate-600 text-slate-600 transition-all rounded-none shadow-none ease-in hover hover:text-slate-100 hover:border-transparent hover:bg-slate-600 hover:rounded-md hover:shadow-md">Order Now</span>
      </LinkToChowNow>
    </nav>
  )
};

export default DesktopNavigation;

