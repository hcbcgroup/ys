const BusinessHours: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8 pb-4 border-b-2 w-full text-center">
        Business Hours
      </h3>
      <div className="flex flex-col space-y-2 text-sm md:text-base lg:text-lg">
        <article className="grid grid-cols-2 space-x-2">
          <h4 className="font-medium font-sans w-max md:text-lg lg:text-xl">
            Mon
          </h4>
          <code className="font-sans text-right md:text-lg lg:text-xl">
            Closed
          </code>
        </article>
        <article className="grid grid-cols-2 space-x-4">
          <h4 className="font-medium font-sans w-max md:text-lg lg:text-xl">
            Tue (Dinner Only)
          </h4>
          <code className="font-sans text-right md:text-lg lg:text-xl">
            5:00 PM - 10:00 PM
          </code>
        </article>
        <article className="grid grid-cols-2 space-x-4">
          <h4 className="font-medium font-sans w-max md:text-lg lg:text-xl">
            Wed to Sun
          </h4>
          <code className="font-sans text-right md:text-lg lg:text-xl">
            11:30 AM - 3:00 PM & 5:00 PM - 10:00 PM
          </code>
        </article>
      </div>
    </div>
  );
};
export default BusinessHours;
