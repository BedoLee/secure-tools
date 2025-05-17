import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LastActivity Viewer - Sistem Aktivite İzleme Aracı",
  description: "Windows sisteminizdeki son aktiviteleri güvenli bir şekilde görüntüleyin. Profesyonel sistem yöneticileri için tasarlandı.",
  keywords: "lastactivity viewer, sistem aktivite, windows monitoring, güvenlik aracı",
  authors: [{ name: "SecureTools" }],
  creator: "SecureTools",
  publisher: "SecureTools",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  metadataBase: new URL("https://secure-tools.vercel.app"),
  openGraph: {
    title: "LastActivity Viewer - Sistem Aktivite İzleme Aracı",
    description: "Windows sisteminizdeki son aktiviteleri güvenli bir şekilde görüntüleyin.",
    url: "https://secure-tools.vercel.app",
    siteName: "SecureTools",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LastActivity Viewer - Sistem Aktivite İzleme Aracı",
    description: "Windows sisteminizdeki son aktiviteleri güvenli bir şekilde görüntüleyin.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <title>LastActivity Viewer - Sistem Aktivite İzleme Aracı</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
