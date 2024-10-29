import { SignUp } from "@clerk/clerk-react";
import { Button } from "@nextui-org/react";
import { Modal, ModalContent } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <Button onPress={onOpen} radius="lg">
          Sign In
        </Button>
      </div>

      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <SignUp routing="virtual" fallbackRedirectUrl={"/app"} />
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
