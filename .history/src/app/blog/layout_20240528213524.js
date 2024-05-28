
import Header from "../header/header";
import Footer from "../footer/footer";
import "../globals.css";


export const metadata = {
    title: "Blog Page",
    description: "This blog page",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }