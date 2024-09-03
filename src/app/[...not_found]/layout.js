export const metadata = {
  title: 'NurArt - 404 ',
  description: '404',
}

export default function RootLayout({ children, params : lang }) {
  return (
    <html lang={lang.not_found[0]}>
      <body>{children}</body>
    </html>
  )
}
