import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body className="h-screen bg-gradient-to-b from-secondary via-tertiary to-quaternary">{children}</body>
    </html>
  )
}
