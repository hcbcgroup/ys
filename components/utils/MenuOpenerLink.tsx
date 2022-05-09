const MenuOpenerLink: React.FC<{ className: string }> = ({ className }) => {
  return (
    <a className={className} href="#" target={'_blank'}>
      View Our Full Menu
    </a>
  );
};

export default MenuOpenerLink;
