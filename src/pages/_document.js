import { Html, Head, Main, NextScript } from "next/document";

const GA_MEASUREMENT_ID = "G-1BLEGKR4PP";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Preconnect to external origins ─────────────────── */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />



        {/* ── Google Analytics ────────────────────────────────── */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* ── Dark mode flicker prevention ────────────────────── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
