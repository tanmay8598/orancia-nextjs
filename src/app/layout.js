"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MenuNavbar from "@/components/Navbar/MenuNavbar";
import { Providers } from "@/redux/provider";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AuthContext from "@/auth/context";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

// export const metadata = {
//   title: "Orancia",
//   description: "Premium Herbal Products",
// };

export default function RootLayout({ children }) {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await sessionStorage.getItem("token");
    if (user) setUser(jwtDecode(user));
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers store={store}>
          <AuthContext.Provider value={{ user, setUser }}>
            <MenuNavbar />
            <main className="relative overflow-hidden">{children}</main>
            <Footer />
          </AuthContext.Provider>
        </Providers>
      </body>
    </html>
  );
}
