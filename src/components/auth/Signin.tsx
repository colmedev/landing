import { Button } from "@nextui-org/react";
import { SignIn } from "@clerk/clerk-react";
import { Modal, ModalContent } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";

export function Signin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <Button onPress={onOpen} radius="lg">
          Log in
        </Button>
        <div className="backdrop-opacity-lg backdrop-blur-xl w-full">
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
              <SignIn routing="virtual" forceRedirectUrl="/app" />
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}
