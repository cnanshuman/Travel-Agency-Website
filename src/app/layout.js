import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import Nav from "./_home/Nav";
import Footer from "./_home/Footer";
import WhatsAppbutton from "./_home/Whatshappbutton";
import MobileNav from "./_home/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased relative`}
        suppressHydrationWarning
      >
        <WhatsAppbutton />
        <MobileNav />
        <Nav />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
