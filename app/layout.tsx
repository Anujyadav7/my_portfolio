import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anuj Yadav | Content & Marketing Operations",
  description: "Portfolio of Anuj Yadav, specializing in cloud operations, creator management, and data-driven marketing.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-white text-gray-900">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
