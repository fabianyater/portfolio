import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='scroll-smooth'>
      <head />
      <body className="bg-gradient-to-b from-secondary via-tertiary to-quaternary">{children}</body>
    </html>
  )
}
