import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <link href="/fonts/GeneralSans-Bold.eot" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Bold.woff" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Bold.woff2" rel="stylesheet" />

        <link href="/fonts/GeneralSans-Medium.eot" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Medium.woff" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Medium.woff2" rel="stylesheet" />

        <link href="/fonts/GeneralSans-Regular.eot" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Regular.woff" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Regular.woff2" rel="stylesheet" />

        <link href="/fonts/GeneralSans-Semibold.eot" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Semibold.woff" rel="stylesheet" />
        <link href="/fonts/GeneralSans-Semibold.woff2" rel="stylesheet" />

        <link href="/fonts/xmoze.eot" rel="stylesheet" />
        <link href="/fonts/xmoze.woff" rel="stylesheet" />
        <link href="/fonts/xmoze.woff2" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
