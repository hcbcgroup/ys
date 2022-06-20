import BusinessHours from './BusinessHours';
import FacebookFeed from './FacebookFeed';
import GoogleMap from './GoogleMap';

const IndexDineIn: React.FC = () => {
  return (
    <div className="w-full">
      <section className="p-8 w-full">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-4 w-full">
          Dine In At Yuchan,
        </h3>
        <p className="leading-8 mb-4 text-center px-4 max-w-md mx-auto pb-4 border-b-2 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero
          voluptate autem, aliquid, debitis quidem molestias optio, doloribus
          itaque repudiandae adipisci amet ipsum deserunt dolor? Dicta labore
          repellendus debitis harum.
        </p>
      </section>
      <div className="w-full h-full pb-16 grid gird-cols-1 gap-8 place-content-center place-items-center px-8">
        <FacebookFeed />
        <GoogleMap />
        <BusinessHours />
      </div>
    </div>
  );
};
export default IndexDineIn;
