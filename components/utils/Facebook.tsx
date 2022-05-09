const Facebook: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYakitoriYuchan%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=912214705987872"
        width={'100%'}
        height={'100%'}
        allowFullScreen={true}
        loading="lazy"
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Facebook;
