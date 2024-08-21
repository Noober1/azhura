import "@/app/globals.css";
import ThemeProvider from "@/app/ThemeProvider";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Azhura",
  description: "YNTKTS",
};

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark azhura" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
