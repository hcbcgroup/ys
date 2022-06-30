/**
 * global style
 */
import '../styles/global.css';
/**
 * next
 */
import type { AppProps } from 'next/app';
/**
 * layout component
 */
import Layout from '@layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
