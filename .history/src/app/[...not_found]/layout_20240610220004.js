export const metadata = {
  title: 'NurArt - 404 ',
  description: '404',
}

export default function RootLayout({ children, params : lang }) {
  console.log(lang.not_found[1]);
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}
