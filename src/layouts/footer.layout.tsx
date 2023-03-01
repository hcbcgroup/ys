const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-backgrounder bg-neutral-900">
      <section className="py-12 px-4 lg:px-8 flex flex-col items-center justify-center">
        <h3 className="font-medium text-xl lg:text-2xl mb-1">
          Yuchan Shokudo, Davis
        </h3>
        <code className="flex flex-col gap-y-3 items-center font-light text-center w-full font-sans text-light">
          <span className="italic text-sm text-slate-300">
            &copy; 2023 All Rights Reserved.
          </span>
          <a
            className=" text-slate-300 text-sm transition-all hover hover:text-blue-400"
            href="https://haneulchoi.studio/developer"
          >
            Created By Haneul Choi Studio
          </a>
        </code>
      </section>
    </footer>
  );
};
export default Footer;
