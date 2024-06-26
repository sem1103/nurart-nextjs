import i18next from "i18next";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next appasdasds",
  StyleSheet : 'public/assets/slickSlider/slick.css',
  StyleSheet : 'public/assets/slickSlider/slick-theme.css',
};


export default function RootLayout({ children }) {
  console.log(i18next.language);
  return (
    <html lang="">
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
