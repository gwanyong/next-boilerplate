import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialPros(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="robots" content="index,follow" />
          <meta name="NaverBot" content="All" />
          <meta name="NaverBot" content="index,follow" />
          <meta name="Yeti" content="All" />
          <meta name="Yeti" content="index,follow" />
          <meta name="keywords" content="코인고스트 , 코고스쿨 , 코고뱅크 , 코고, NFT " />
          <meta charSet="UTF-8" />
          <meta name="naver-site-verification" content="e14fd333f95b7d108cb2033a478238868b36d52e" />
          <link rel="shortcut icon" href="https://s3.coinghost.com/cogo_school/favicon/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://s3.coinghost.com/cogo_school/favicon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://s3.coinghost.com/cogo_school/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="https://s3.coinghost.com/cogo_school/favicon/favicon-48x48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="https://s3.coinghost.com/cogo_school/favicon/favicon-196x196.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://s3.coinghost.com/cogo_school/favicon/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://s3.coinghost.com/cogo_school/favicon/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://s3.coinghost.com/cogo_school/favicon/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://s3.coinghost.com/cogo_school/favicon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://s3.coinghost.com/cogo_school/favicon/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://s3.coinghost.com/cogo_school/favicon/apple-touch-icon-152x152.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="__portal" />
        </body>
      </Html>
    );
  }
}
