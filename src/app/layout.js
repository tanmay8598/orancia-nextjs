import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import ClientOnly from "@/components/ClientOnly";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "Orancia",
  description: "Premium Herbal Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="__next">
      <link
        rel="preconnect"
        href="https://kadameziyarat-s3-bucket.s3.us-east-1.amazonaws.com/"
      />
      <body className={poppins.className}>
        <Providers>
          <ClientOnly>{children}</ClientOnly>
        </Providers>
      </body>
    </html>
  );
}
