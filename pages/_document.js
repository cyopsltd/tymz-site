import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Tymz - Effortless event scheduling"
        />
        <meta
          property="og:description"
          content="Create one-off and recurring booking pages for business or personal use."
        />
        <meta property="og:site_name" content="Tymz" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://tymz.ai" />
        <meta property="og:image" content="https://tymz.ai/img/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Tymz - Effortless event scheduling"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tymz - Effortless event scheduling"
        />
        <meta
          name="twitter:description"
          content="Create one-off and recurring booking pages for business or personal use."
        />
        <meta name="twitter:image" content="https://tymz.ai/img/preview.jpg" />

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
