import { Html, Head, Main, NextScript } from "next/document";

const GA_MEASUREMENT_ID = "G-1BLEGKR4PP";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Font preconnects (only 2 needed for Google Fonts) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Preload LCP hero image to reduce LCP time ── */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/ProductPages/ss/hero.webp"
          type="image/webp"
          fetchPriority="high"
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
