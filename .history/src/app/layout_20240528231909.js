import Footer from "./footer/footer";
import "./globals.css";
import Header from "./header/header";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next appasdasds",
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
