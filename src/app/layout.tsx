import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Pouradier • Softaware Engineer",
  description: "I'm Chris! Full-stack developer, Learning AI | New Tech | SEO | Next.js | React",
  icons: {
    icon: [
      { 
        url: '/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any'
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '48x48'
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className = {`${poppins.className} h-full`} >
      <body className="antialiased h-full max-w p-4">

        <div className="flex flex-col gap-4">
        <Header/>
        {children}
        </div>
      </body>
    </html>
  );
}
