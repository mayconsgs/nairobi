import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
