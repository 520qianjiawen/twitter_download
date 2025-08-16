import { getTranslation } from '@/lib/i18n';
import { Link,Chip } from '@heroui/react';

export default function MyFooter({ locale = 'en' }) {
    const t = function(key){
        return getTranslation(locale, key);
    }
    return (
        <div className="page-container p-10 flex justify-between">
            <div className="flex flex-col gap-2 w-full md:w-1/3">
                <div className="flex items-center gap-1">
                    <p className="text-xl font-bold mb-2 w-fit">{t('TwitterXDownload')}</p>
                    <Link href="https://github.com/ezshine/twitterxdownload" target="_blank"><Chip color="danger" size="sm" variant="flat" className="ml-2 -mt-1.5">v{process.env.APP_VERSION}</Chip></Link>
                </div>
                <p className="text-sm text-gray-500 mb-7">{t('The fastest and most reliable Twitter video downloader. Free to use, no registration required.')}</p>
                {/* Update the copyright notice to reflect the new domain and brand name. */}
                <p className="text-sm text-gray-500">© 2024 <a href="https://x.neutemu.com" target="_blank">Twitter Download</a> {t('All rights reserved.')}</p>
            </div>
            <div className="hidden md:flex flex-col gap-4">
                <div>
                    <p className="font-bold mb-2">{t('Other Links')}</p>
                    <ul className="flex flex-col gap-1">
                        <li><Link href="/about-us" className="text-sm hover:text-primary">{t('About Us')}</Link></li>
                        <li><Link href="/privacy-policy" className="text-sm hover:text-primary">{t('Privacy Policy')}</Link></li>
                        <li><Link href="/terms-of-service" className="text-sm hover:text-primary">{t('Terms of Service')}</Link></li>
                    </ul>
                </div>
            </div>
            <div className="hidden md:flex flex-col gap-4">
                <div>
                    <p className="font-bold mb-2">{t('Contact Us')}</p>    
                    {/* Update the contact email address and mailto link to the new address. */}
                    <Link href="mailto:sales@neutemu.com" className="text-sm hover:text-primary mb-4">sales@neutemu.com</Link>
                    {/* Update the Supadr domain rating badge to reference the new domain. */}
                    <a href="https://supadr.com?utm_source=x.neutemu.com&utm_medium=badge&utm_campaign=supadr" target="_blank">
                        <img src="https://supadr.com/api/badge/x.neutemu.com.svg?theme=blue" alt="Domain Rating for x.neutemu.com" width="280" height="64" />
                    </a>
                </div>
            </div>
        </div>
    )
}