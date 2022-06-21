const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-backgrounder">
      <section className="p-8 flex flex-col items-center justify-center">
        <p className="font-medium text-lg lg:text-xl mb-2">
          Yuchan Shokudo, Davis
        </p>
        <code className="block font-thin text-center w-full font-sans text-light">
          &copy; 2022 by Yuchan. Created By{' '}
          <a
            className=" text-slate-200 font-medium transition-all hover hover:text-blue-400"
            href="https://haneulab.com"
          >
            HaneuLab
          </a>
        </code>
      </section>
    </footer>
  );
};
export default Footer;
