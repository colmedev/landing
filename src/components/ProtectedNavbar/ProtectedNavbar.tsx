import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Signin } from "../auth/Signin";

const ProtectedNavbar: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <a>Logo</a>
        </div>

        <div>
          <SignedOut>
            <Signin />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default ProtectedNavbar;
