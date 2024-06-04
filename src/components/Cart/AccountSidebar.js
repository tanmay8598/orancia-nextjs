import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import LoginForm from "../Account/LoginForm";
import Register from "../Account/Register";
import { ScrollArea } from "../ui/scroll-area";

const AccountSidebar = ({ isOpen, setIsOpen }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
    setIsLogin(!isLogin);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white lg:max-w-[500px] ">
        <SheetHeader>
          <SheetTitle className="text-left mb-8">My Account</SheetTitle>
        </SheetHeader>
        {isRegistering || isLogin ? (
          <Register
            setIsLogin={setIsLogin}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ) : (
          <LoginForm
            setIsRegistering={setIsRegistering}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
        <p className="mt-4 text-center font-bold">
          {isRegistering ? (
            <>Already have an account? </>
          ) : (
            <>Don't have an account? </>
          )}
          <button
            onClick={handleToggleForm}
            className="text-[#ed1d24] underline"
          >
            {isRegistering ? "Login" : "Register"}
          </button>
        </p>
      </SheetContent>
    </Sheet>
  );
};

export default AccountSidebar;
