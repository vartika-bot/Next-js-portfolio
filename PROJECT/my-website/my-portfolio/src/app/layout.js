import "./globals.css";
import { Montserrat } from "next/font/google"; // Import Montserrat font

// Load the Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "My Portfolio",
  description: "A web developer portfolio showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}