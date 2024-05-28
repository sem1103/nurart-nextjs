import "./globals.css";



export default function RootLayout({ children }) {
  
  return (
    <Head>
    <title>asda</title>
  </Head>
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
