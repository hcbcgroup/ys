import Link from "next/link";
import type { NavigationProps } from "../../interfaces/componentPropTypes";
import LinkToChowNow from "./LinkToChowNow";

const DesktopNavigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
      <section className="flex space-x-2 lg:space-x-3 xl:space-x-4 text-texter">
        {links.map((link, index) => (
          <Link key={index} href={link.pageTo}>
            <a className="transition-all  hover hover:text-texter/75 font-medium">{link.pageText}</a>
          </Link>
        ))}
      </section>
      <LinkToChowNow className="font-bold">
        <span className="px-3 py-2 border-2 border-highlighter/75 text-highlighter/75 transition-all rounded-none shadow-none ease-in hover hover:text-texter hover:border-transparent hover:bg-highlighter/75 hover:rounded-md hover:shadow-md">Order Now</span>
      </LinkToChowNow>
    </nav>
  )
};

export default DesktopNavigation;

