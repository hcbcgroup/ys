const BusinessHours: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="font-bold text-xl lg:text-2xl mb-8 pb-2 border-b-2 w-full text-center">
        Business Hours
      </h3>
      <div className="flex flex-col space-y-2 text-sm md:text-base lg:text-lg">
        <article className="flex justify-between items-center space-x-2">
          <h4 className="font-medium font-sans">Mon</h4>

          <code className="block font-sans">Closed</code>
        </article>
        <article className="flex justify-between items-center space-x-4">
          <h4 className="font-medium font-sans">Tue (Dinner Only)</h4>
          <code className="block font-sans">5:00 PM - 10:00 PM</code>
        </article>
        <article className="flex justify-between items-center space-x-4">
          <h4 className="font-medium font-sans">Wed to Sun</h4>
          <code className="block font-sans text-right">
            11:30 AM - 3:00 PM & 5:00 PM - 10:00 PM
          </code>
        </article>
      </div>
    </div>
  );
};
export default BusinessHours;
