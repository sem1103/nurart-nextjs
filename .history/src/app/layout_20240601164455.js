import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next "
};

export default  function RootLayout({ children }) {

  return (
    
          <>
         
            <Header />
            <main>{children}</main>
            <Footer />
   
          </>
  );
}