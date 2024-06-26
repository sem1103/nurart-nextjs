import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next appasdasds",
  StyleSheet : 'public/assets/slickSlider/slick.css'
};

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
