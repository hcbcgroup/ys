const BusinessHours: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8 pb-4 border-b-2 w-full text-center">
        Business Hours
      </h3>
      <div className="flex flex-col space-y-2 text-sm md:text-base lg:text-lg">
        <article className="grid grid-cols-2 space-x-2">
          <h4 className="font-medium font-sans w-max md:text-lg lg:text-xl">
            Mon to Thur (Dinner Only)
          </h4>
          <code className="font-sans text-right md:text-lg lg:text-xl">
          5:00 PM - 10:00 PM
          </code>
        </article>
        <article className="grid grid-cols-2 space-x-4">
          <h4 className="font-medium font-sans w-max md:text-lg lg:text-xl">
            Fri to Sat (All Day)
          </h4>
          <code className="font-sans text-right md:text-lg lg:text-xl">
            12:00 PM - 11:00 PM
          </code>
        </article>
        <article className="grid grid-cols-2 space-x-4">
          <h4 className="font-medium font-sans w-max md:text-lg lg:text-xl">
            Sun (All Day)
          </h4>
          <code className="font-sans text-right md:text-lg lg:text-xl">
            12:00 PM - 10:00 PM
          </code>
        </article>
        <p className="pt-2 lg:pt-3 leading-[1.67] font-light text-neutral-200">
        <span className="text-red-500">*</span><span className="font-bold text-white">NOTE</span> that Hours are subject to change without notice. Please visit our <a href="https://facebook.com/YuchanShokudo" target="_blank" rel="no-referrer noreferrer">Facebook</a> page for up-to-date information.
        </p>
      </div>
    </div>
  );
};
export default BusinessHours;
