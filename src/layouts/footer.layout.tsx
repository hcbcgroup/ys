const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-backgrounder bg-neutral-900">
      <section className="py-12 px-4 lg:px-8 flex flex-col items-center justify-center">
        <h3 className="font-medium text-xl lg:text-2xl mb-1">
          Yuchan Shokudo, Davis
        </h3>
        <code className="flex flex-col gap-y-3 items-center font-light text-center w-full font-sans text-light">
          <span className="italic text-sm text-slate-300">
            &copy; 2025 All Rights Reserved.
          </span>
          <div
        
 
          >
             <span className="inline-block text-gray-500">produced by</span> <a className=" text-sm transition-all hover text-blue-500 lg:hover:text-blue-500/50"  href="https://hnbcodesign.com">
             H&B Codesign
             </a> <span className="inline-block text-gray-500">with love</span>
          </div>
        </code>
      </section>
    </footer>
  );
};
export default Footer;
