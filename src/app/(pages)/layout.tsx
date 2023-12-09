import "@/app/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twikkl Dashboard",
  description: "Twikkl Admin Dashboard",
};

const axiforma = localFont({
  src: [
    {
      path: "../../../public/fonts/Axiforma-Thin.ttf",
      weight: "200",
    },
    {
      path: "../../../public/fonts/Axiforma-Light.ttf",
      weight: "300",
    },
    {
      path: "../../../public/fonts/Axiforma-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Axiforma-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/Axiforma-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../../public/fonts/Axiforma-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-axiforma",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${axiforma.className} h-screen flex flex-col overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
