import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <meta
          name="google-site-verification"
          content="aPTEYzb4NMnSbvgZ_Oct2knVHNWErSK1jm9uGlKMiAY"
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
