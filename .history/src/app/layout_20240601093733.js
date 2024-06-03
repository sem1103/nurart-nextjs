import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

import "./globals.css";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
