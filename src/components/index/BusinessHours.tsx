const BusinessHours: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="font-bold text-xl lg:text-2xl mb-8 pb-2 border-b-2 w-full text-center">
        # Business Hours
      </h3>
      <div className="flex flex-col space-y-2 text-sm md:text-base lg:text-lg">
        <article className="flex justify-between items-center space-x-2">
          <h4 className="font-medium">Mon</h4>

          <code className="block">Closed</code>
        </article>
        <article className="flex justify-between items-center space-x-4">
          <h4 className="font-medium">Tue (Dinner Only)</h4>
          <code className="block">5:00PM-10:00PM</code>
        </article>
        <article className="flex justify-between items-center space-x-4">
          <h4 className="font-medium">Wed to Sun</h4>
          <code className="block text-right">
            11:30AM-3:00PM & 5:00PM-10:00PM
          </code>
        </article>
      </div>
    </div>
  );
};
export default BusinessHours;
