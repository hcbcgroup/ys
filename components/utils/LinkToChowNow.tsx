const LinkToChowNow: React.FC<{ className: string; children: JSX.Element }> = ({
  className,
  children,
}) => {
  return (
    <a
      className={className}
      href="https://direct.chownow.com/order/20071/locations/28924"
    >
      {children}
    </a>
  );
};

export default LinkToChowNow;
