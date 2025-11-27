import { forwardRef, useState } from "react";
import Modal from "../modalStyles";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Inputs from "../../inputs/InputStyles";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAccount = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    useOutsideClick(ref as React.RefObject<HTMLDivElement>, onClose);

    const { createAccount } = useAuth();

    const [accountName, setAccountName] = useState("");
    const [bankName, setBankName] = useState("");
    const [currentBalance, setCurrentBalance] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (
        !accountName ||
        !bankName ||
        !currentBalance
      ) {
        return toast.error("Please fill in all fields");
      }

      try {
        createAccount(
          accountName,
          bankName,
          currentBalance,
          19,
        );
        onClose();
      } catch (error) {
        console.log(error);
      }
    };

    if(!isOpen) return;

    return (
      <Modal.Wrapper>
        <Modal.Base ref={ref}>
          <Modal.Title>Add New Account</Modal.Title>
          <Modal.Form onSubmit={handleSubmit}>
            <Modal.InputWrapper>
              <Modal.InputTitle>Account Name</Modal.InputTitle>
              <Inputs.ModalMD
                type="text"
                placeholder="e.g., My Personal Savings"
                onChange={(e) => (setAccountName(e.target.value))}
              />

              <Modal.InputTitle>Bank Name</Modal.InputTitle>
              <Inputs.ModalMD
                type="text"
                placeholder="e.g., Global Bank"
                onChange={(e) => (setBankName(e.target.value))}
              />

              {/* <S.InputTitle>Account Type</S.InputTitle>
              <Inputs.ModalMD type="text" placeholder="e.g., Global Bank" /> */}

              <Modal.InputTitle>Initial Balance</Modal.InputTitle>
              <Inputs.ModalMD
                type="number"
                placeholder="e.g., 1000.00"
                onChange={(e) =>
                  (setCurrentBalance(parseFloat(e.target.value)))
                }
              />
            </Modal.InputWrapper>

            <Modal.ButtonsInputsWrapper>
              <Inputs.ModalCancelInput value="Cancel" onClick={() => onClose()} />
              <Inputs.ModalSubmit value="Save" />
            </Modal.ButtonsInputsWrapper>
          </Modal.Form>
        </Modal.Base>
      </Modal.Wrapper>
    );
  }
);

export default ModalAccount;
