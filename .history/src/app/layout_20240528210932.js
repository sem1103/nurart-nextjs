import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "next/document";



export default function RootLayout({ children }) {
  <Head>
    <title>asd</title>
  </Head>

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
