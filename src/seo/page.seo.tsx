import Head from 'next/head';

interface PageSEOProps {
  title: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ title }) => {
  return (
    <Head>
      <meta
        name="description"
        content="Yuchan Shokudo formerly Yakitori Yuchan, established 2014 in Davis, CA
              aim to provide authentic, home-style Japanese cuisine in the form
              of ramen and donburi to the Davis and Sacramento area."
      />
      <title>
        Yuchan Shokudo |{' '}
        {title ? title : 'Authentic & Homestyle Japanese Cuisine'}
      </title>
    </Head>
  );
};
export default PageSEO;
