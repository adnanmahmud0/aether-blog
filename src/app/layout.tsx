import Navbar from "@/components/layout/navbar/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>

        <header>
          <Navbar />
        </header>

        <main>
          {children}
        </main>

        <footer>
        </footer>

      </body>
    </html>
  )
}