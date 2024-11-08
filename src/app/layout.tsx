import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music App",
  description: "Generated by create music app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
