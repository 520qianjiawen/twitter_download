import "../globals.css";

import GoogleAnalytics from '../components/google/GoogleAnalytics';
import GoogleAdsense from '../components/google/GoogleAdsense';
import UmamiAnalytics from '../components/common/UmamiAnalytics';

import {Providers} from "../providers";

import MyNavbar from '../components/ui/MyNavbar';
import MyFooter from '../components/ui/MyFooter';


// Metadata used to populate page titles and meta tags.  
//
// The default title and description have been rewritten to better reflect the
// capabilities of the service and to use the new branding.  When a page
// supplies its own title via the template, it will be appended before the
// brand name.  The canonical URL, OpenGraph and Twitter card data now
// reference the new domain (x.neutemu.com) and the siteName reflects the
// updated brand, "Twitter Download".  These changes improve SEO and ensure
// that search engines and social platforms link to the correct domain.
export const metadata = {
  title: {
    // Default fallback title used when a page does not specify its own
    // title.  It contains the new brand name and describes the core
    // functionality of the site.
    default: 'Twitter Download - Free & Fast Twitter Video Downloader',
    // When a page supplies its own title string it will replace the `%s`
    // placeholder, with the brand appended after the separator.
    template: '%s | Twitter Download'
  },
  // A concise meta description to help search engines and social sites
  // understand what the site does.  Updated to include GIFs and media
  // downloads and emphasise the free, registration‑free nature of the service.
  description: 'Download Twitter videos, GIFs and media quickly and easily with our free Twitter video downloader. No registration required – save high‑quality media from Twitter in seconds.',
  keywords: 'twitter downloader, twitter video download, twitter gif downloader, x.com downloader',
  // The authors field is updated to reflect the new brand name.
  authors: [{ name: 'Twitter Download' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    // Point canonical URLs at the new domain.
    canonical: 'https://x.neutemu.com/',
  },
  openGraph: {
    title: 'Twitter Download - Free & Fast Twitter Video Downloader',
    description: 'Download Twitter videos, GIFs and media quickly and easily with our free Twitter downloader. No registration required.',
    type: 'website',
    // Use the new domain for OpenGraph URLs.
    url: 'https://x.neutemu.com',
    // Update the siteName to the new brand.
    siteName: 'Twitter Download',
    // Update image URL to point at the new domain.  The actual image file
    // resides in the `public/images` folder and will be served from the
    // configured domain.
    images: [{
      url: 'https://x.neutemu.com/images/og.png'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    // Retain the existing handle for the Twitter account; it may not change.
    site: '@twitterxdownload',
    title: 'Twitter Download - Free & Fast Twitter Video Downloader',
    description: 'Download Twitter videos, GIFs and media quickly and easily with our free Twitter downloader. No registration required.',
    images: ['https://x.neutemu.com/images/og.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180' }
    ]
  }
};

export default function RootLayout({ children, params }) {
    const locale = params?.locale || 'en';

    return (
      <html lang={locale} suppressHydrationWarning>
        <head>
            <GoogleAdsense />
            <GoogleAnalytics />
            <UmamiAnalytics />
        </head>
        <body className="bg-background text-foreground">
            <Providers>
                <MyNavbar locale={locale} />
                {children}
                <MyFooter locale={locale} />
            </Providers>
        </body>
      </html>
    );
  }