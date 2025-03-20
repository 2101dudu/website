import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Cursor from "./components/cursor";
import NavBar from "./pages/navbar";
import BottomGradient from "./components/bottomgradient";
import TopGradient from "./components/topgradient";

const jetBrains = JetBrains_Mono({
  variable: "--font-jet-brains",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eduardo Faria",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrains.variable} antialiased`}>
        <Cursor />
        <NavBar />
        <TopGradient />
        {children}
        <BottomGradient />
        <Analytics />
      </body>
    </html>
  );
}
