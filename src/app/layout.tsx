import "@/app/globals.css";
import ThemeProvider from "@/app/ThemeProvider";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import OGImage from "@/images/og-image.jpg";
import TWImage from "@/images/tw-image.jpg";
import icon from "@/images/favicon.ico";

export const metadata: Metadata = {
  title: "Cucu Ruhiyatna",
  icons: icon.src,
  description:
    "Hello, my name is Cucu Ruhiyatna, a full-stack developer. Welcome to my personal website.",
  openGraph: {
    images: [OGImage.src],
  },
  twitter: {
    images: [TWImage.src],
  },
};

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

const Impact = localFont({
  src: "../fonts/ImpactLTStd.woff2",
  variable: "--font-impact",
  weight: "400",
  style: "normal",
});

const Inpin = localFont({
  src: "../fonts/Inpin.ttf",
  variable: "--font-inpin",
  weight: "400",
  style: "normal",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark azhura" suppressHydrationWarning>
      <body className={twMerge(Impact.variable, Inpin.variable)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
