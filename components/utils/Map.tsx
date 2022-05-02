const Map: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.6253805783413!2d-121.74320768471802!3d38.542402875395794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808529733dbf7f5b%3A0x9e235fc2a7dfe725!2sYAKITORI%20YUCHAN!5e0!3m2!1sen!2sus!4v1651485841313!5m2!1sen!2sus"
        width="250"
        height="250"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;