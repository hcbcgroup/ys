/**
 * next
 */
import { Html, Head, Main, NextScript } from 'next/document';
/**
 * react
 */
import { useEffect } from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="w-full bg-backgrounderBold text-texter">
        <Main />
        <NextScript />
        <noscript>
          Enable JavaScript to ensure
          <a href="https://userway.org">website accessibility</a>
        </noscript>
      </body>
    </Html>
  );
}
