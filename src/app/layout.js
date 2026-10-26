import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import { CurtainProvider } from "@/components/CurtainPreloader";
import Navigation from "@/components/Navigation";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Neozen — Innovative Architecture & Sustainable Design",
  description:
    "Neozen is a design studio committed to sustainable architecture, regenerative spaces, and thoughtful modern craft.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body data-theme="dark">
        <SmoothScrollProvider>
          <CurtainProvider>
            <Navigation />
            {children}
          </CurtainProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
