import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
  } from "next/document";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
  
      return initialProps;
    }
  
    render() {
      return (
        <Html>
          <Head>
            <link
              rel="preload"
              href="/fonts/BomberSquadShadow.ttf"
              as="font"
              type="font/ttf"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/BomberSquad.ttf"
              as="font"
              type="font/ttf"
              crossOrigin="anonymous"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;