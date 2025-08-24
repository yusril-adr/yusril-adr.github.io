import type { Metadata } from "next";
import "./globals.css";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { ServiceWorkerRegister } from "../components/sw-register";

export const metadata: Metadata = {
  title: "Yusril A. P. Portfolio | Front-End Developer/Back-End Developer/Fullstack Developer",
  description: "My portfolio as Front-End Developer | Back-End Developer | Fullstack Developer.",
  icons: {
    icon: '/images/icon.png',
  },
  // Since next export is not support manifest meta yet, so we need to use this workaround
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Yusril A. P.',
    'theme-color': '#1e2327',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
