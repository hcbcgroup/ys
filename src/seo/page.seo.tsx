/**
 * next
 */
import Head from 'next/head';
/**
 * react
 */
import { useEffect, useState } from 'react';
/**
 * local interfaces & types
 */
interface PageSEOProps {
  title?: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ title }) => {
  const [routeTitle, setRouteTitle] = useState(
    'Yuchan Shokudo - Authentic & Homestyle Japanese Cuisine'
  );
  useEffect(() => {
    setRouteTitle(
      `Yuchan Shokudo - Authentic & Homestyle Japanese Cuisine ${
        title ? `| ${title}` : ''
      }`
    );
  }, [title]);
  return (
    <Head>
      <meta
        name="description"
        content="Yuchan Shokudo formerly Yakitori Yuchan, established 2014 in Davis, CA
              aim to provide authentic, home-style Japanese cuisine in the form
              of ramen and donburi to the Davis and Sacramento area."
      />
      {!title && (
        <title>Yuchan Shokudo | Authentic & Homestyle Japanese Cuisine</title>
      )}
      {title && <title>{routeTitle}</title>}
    </Head>
  );
};
export default PageSEO;
