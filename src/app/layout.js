export const metadata = {
  // Set the base URL for all metadata links to the new domain.  This ensures
  // that relative URLs in metadata resolve correctly to https://x.neutemu.com.
  metadataBase: new URL('https://x.neutemu.com'),
}

export default function RootLayout({ children }) {
  return children;
}