// components/ClientOnly.js
"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AuthContext from "@/auth/context";
import MenuNavbar from "@/components/Navbar/MenuNavbar";
import Footer from "@/components/Footer/Footer";

const ClientOnly = ({ children }) => {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await sessionStorage.getItem("token");
    if (user) setUser(jwtDecode(user));
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <MenuNavbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </AuthContext.Provider>
  );
};

export default ClientOnly;
