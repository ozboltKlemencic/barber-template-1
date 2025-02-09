import type { Metadata } from "next";
import { Montserrat, Teko } from "next/font/google";
import "./globals.css";


// Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300","400","500","600", "700"], // Specify weights as needed
});

// Tekko
const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300","400","500","600", "700"], // Specify weights as needed
});

export const metadata: Metadata = {
  title: "Blackout Brivnica | Striženje, Britje in Nega Brade",
  description: "Blackout Brivnica – vrhunska moška nega, britje, striženje in oblikovanje brade v prijetnem ambientu. Obiščite nas in doživite kakovost!",
  keywords: ["brivnica", "moško striženje", "britje", "urejanje brade", "barber shop", "Ljubljana", "Blackout Brivnica"],
  authors: [{ name: "Ožbolt Klemenčič", url: process.env.NEXT_PUBLIC_BASE_URL }],
  robots: "index, follow",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  openGraph: {
    title: "Blackout Brivnica | Striženje, Britje in Nega Brade",
    description: "Obiščite našo brivnico za najboljšo izkušnjo striženja in britja. Strokovno osebje, vrhunska nega!",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Blackout Brivnica",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Blackout Brivnica Barber Shop",
      },
    ],
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackout Brivnica | Striženje, Britje in Nega Brade",
    description: "Profesionalno moško striženje in britje v Blackout Brivnici. Pridite po svoj svež videz!",
    site: "@BlackoutBrivnica",
  },
  other: {
    "theme-color": "#000000",
    "google-site-verification": "VSTAVI-TVOJO-KODO",
  },
};



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>)
 {
 
  return (
    <html lang="sl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${teko.variable} ${montserrat.variable} antialiased overflow-x-hidden`}
      >
    
        {children}
      </body>
    </html>
  );
}
