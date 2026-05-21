import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Portfólio",
  description: "Portfólio desenvolvido em Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>

        <Navbar />

        {children}

      </body>
    </html>
  )
}