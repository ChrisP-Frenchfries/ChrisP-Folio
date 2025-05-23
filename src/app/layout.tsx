import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { Header } from "../components/Header/header";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins"
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
    <html lang="fr" className={`${poppins.className} h-full`} >
      <body className="antialiased h-full max-w p-4">
        <Header />
        <div className="flex flex-col gap-4">
          {children}
        </div>
      </body>
    </html>
  );
}
