import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      
      <body className="min-h-screen flex flex-col bg-slate-50 antialiased" >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
