import { Cookie } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar"; 
import Footer from "./Components/Footer";

const cook = Cookie({ subsets: ["latin"], weight:"400"});

export const metadata = {
  title: "blogging platform",
  description: "A web development platform for web developers",
  keywords: "html,tailwind,css,js,javascript,react,next,vite"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={cook.className}>
    <Navbar/>
    <div className="min-h-screen">
    {children}

    </div>
    <Footer/>
    </body>
    </html>

  );
}