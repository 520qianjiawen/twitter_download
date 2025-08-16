'use client';

import Script from 'next/script';

export default function GoogleAdsense() {
  // Insert Google AdSense script directly with the provided client ID.  The
  // script is loaded lazily to avoid blocking the rendering of the page.  The
  // `async` attribute is set automatically by next/script when the `strategy`
  // prop is provided.
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2719674832476577"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
    </>
  );
}