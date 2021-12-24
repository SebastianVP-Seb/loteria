import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Licorice&family=Pushster&display=swap" rel="stylesheet"></link>        </Head>
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Bad+Script&family=Cormorant+Garamond:ital,wght@1,300&family=Licorice&family=Pushster&display=swap" rel="stylesheet"></link>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;