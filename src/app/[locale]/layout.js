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
    // 默认的标题为中文，突出品牌“Twitter视频下载”和其核心功能。若页面自定义标题，将替换 `%s` 占位符，品牌名称置于后缀。
    default: 'Twitter视频下载 - 免费快速的Twitter视频下载器',
    template: '%s | Twitter视频下载'
  },
  // 中文版的描述，强调这是一个免费、快速且易于使用的 Twitter 视频下载工具，无需注册即可下载 Twitter 视频及媒体内容。
  description: '免费的Twitter视频下载器 – 快速可靠且易于使用，无需注册即可快速下载Twitter视频和媒体内容。',
  // 关键词也用中文表达，兼顾常用英文关键词便于搜索引擎识别。
  keywords: 'twitter下载器, twitter视频下载, twitter gif 下载, x.com 下载, twitter downloader',
  // 作者名称使用中文品牌名。
  authors: [{ name: 'Twitter视频下载' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    // Point canonical URLs at the new domain.
    canonical: 'https://x.neutemu.com/',
  },
  openGraph: {
    title: 'Twitter视频下载 - 免费快速的Twitter视频下载器',
    description: '免费的Twitter视频下载器 – 快速可靠且易于使用，无需注册即可快速下载Twitter视频和媒体内容。',
    type: 'website',
    url: 'https://x.neutemu.com',
    siteName: 'Twitter视频下载',
    images: [{
      url: 'https://x.neutemu.com/images/og.png'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@twitterxdownload',
    title: 'Twitter视频下载 - 免费快速的Twitter视频下载器',
    description: '免费的Twitter视频下载器 – 快速可靠且易于使用，无需注册即可快速下载Twitter视频和媒体内容。',
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