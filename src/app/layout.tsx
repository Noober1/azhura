import "@/app/globals.css";
import ThemeProvider from "@/app/ThemeProvider";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Cucu Ruhiyatna",
  description: "Cucu Ruhiyatna personal website",
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

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark azhura" suppressHydrationWarning>
      <body
        className={twMerge(inter.className, Impact.variable, Inpin.variable)}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
