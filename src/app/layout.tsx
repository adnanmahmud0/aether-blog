
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";



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
          <Footer />
        </footer>

      </body>
    </html>
  )
}