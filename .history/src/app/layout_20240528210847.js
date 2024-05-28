import { Inter } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }) {
  <Headers >
    <title>aalalla</title>
  </Headers>

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
