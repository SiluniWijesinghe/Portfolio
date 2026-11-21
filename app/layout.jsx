import localFont from "next/font/local";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ScrollToTop from "@/components/ScrollToTop"

// Self-hosted fonts: no network request to Google at dev/build time.
const grotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.woff2",
  weight: "300 700",
  variable: "--font-grotesk",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  weight: "300 700",
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  title: "Siluni Wijesinghe | Software Engineer",
  description: "Software engineer and problem solver building reliable full-stack systems. IT undergraduate at the University of Moratuwa, currently learning AWS and AI engineering.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} ${jetBrainsMono.variable}`}>
        <ScrollToTop />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
