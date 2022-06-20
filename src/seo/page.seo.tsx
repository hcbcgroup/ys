import Head from 'next/head';

interface PageSEOProps {
  title: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ title }) => {
  return (
    <Head>
      <title>Yuchan Shokudo | {title}</title>
    </Head>
  );
};
export default PageSEO;
