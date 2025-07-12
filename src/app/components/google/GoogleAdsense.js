'use client';

import Script from 'next/script';

export default function GoogleAdsense() {
  return (
    <>
      {/* 加载 Google AdSense 脚本 */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* 启用自动广告 */}
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}",
            enable_page_level_ads: true
          });
        `}
      </Script>
    </>
  );
}