import { Html, Head, Main, NextScript } from 'next/document';

export const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="Market Place" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};

export default Document;
