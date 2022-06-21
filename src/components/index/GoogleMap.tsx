const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="font-bold text-xl lg:text-2xl mb-2">Our Location</h3>
      <p className="mb-8 font-sans font-light">109 E Street. Davis, CA 95616</p>
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.6253805783413!2d-121.74320768471802!3d38.542402875395794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808529733dbf7f5b%3A0x9e235fc2a7dfe725!2sYAKITORI%20YUCHAN!5e0!3m2!1sen!2sus!4v1651485841313!5m2!1sen!2sus"
        width={'100%'}
        height={'100%'}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default GoogleMap;
