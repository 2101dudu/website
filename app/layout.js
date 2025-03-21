import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Cursor from "./components/cursor";
import NavBar from "./pages/navbar";
import TopGradient from "./components/topgradient";
import Footer from "./pages/footer.js";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${jetBrains.variable} antialiased`}>
        <Cursor />
        <NavBar />
        <TopGradient />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
