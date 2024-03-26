import type { Metadata } from "next";
import { GlobalProvider } from "./GlobalProvider";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";




const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: "Fribastelua",
  description: "Frisbeekauppa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={montserrat.className}>
        <GlobalProvider>
        <Navigation />
        {children}
        <Footer />
        </GlobalProvider>
        </body>
    </html>
   
  );
}
