import { Navbar } from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Signin } from "./auth/Signin";
import { Login } from "./auth/Login";
export default function Nav() {
  return (
    <>
      <div className="flex justify-between px-5">
        <div className="text-center">
          <span className="text-base font-bold text-blue-500">TaskWave</span>
        </div>
        <Navbar className="flex justify-end w-fit bg-inherit">
          <SignedOut>
            <Signin />
          </SignedOut>
          <SignedIn>
            <Button>
              <UserButton />
            </Button>
          </SignedIn>

          <SignedOut>
            <Login />
          </SignedOut>
          <SignedIn>
            <Button>
              <UserButton />
            </Button>
          </SignedIn>
        </Navbar>
      </div>
    </>
  );
}
