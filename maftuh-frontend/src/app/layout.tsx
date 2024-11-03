import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maftuh - Social Media for the rest of us",
  description: "Social Media for the rest of us",
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
