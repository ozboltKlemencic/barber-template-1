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
  title: "Blackout",
  description: "Brivnica Blackout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body
        className={`${teko.variable} ${montserrat.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
