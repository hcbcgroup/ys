const FacebookFeed: React.FC = () => {
  return (
    <div className="w-full md:w-max mx-auto h-auto flex flex-col items-center">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
        Facebook Feeds
      </h3>
      <iframe
        className="w-full overflow-hidden h-96"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYakitoriYuchan%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=912214705987872"
        style={{ overflow: 'hidden' }}
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
export default FacebookFeed;
