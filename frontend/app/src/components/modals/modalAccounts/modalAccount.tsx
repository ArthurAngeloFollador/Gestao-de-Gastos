import { forwardRef } from "react";
import Modal from "../modalStyles";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Inputs from "../../inputs/InputStyles";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useMoneyMask } from "../../../hooks/useMoneyMask";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAccount = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    useOutsideClick(ref as React.RefObject<HTMLDivElement>, onClose);

    const money = useMoneyMask("$0.00");

    const { createAccount } = useAuth();

    const accountRef = React.useRef<HTMLInputElement>(null);
    const bankRef = React.useRef<HTMLInputElement>(null);
    const balanceRef = React.useRef<HTMLInputElement>(null);

    // const [accountName, setAccountName] = useState("");
    // const [bankName, setBankName] = useState("");
    // const [currentBalance, setCurrentBalance] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (
        !accountRef.current?.value ||
        !bankRef.current?.value ||
        !balanceRef.current?.value
      ) {
        return toast.error("Please fill in all fields");
      }

      try {
        createAccount(
          accountRef.current.value,
          bankRef.current.value,
          money.getRawValue(),
          19
        );
        onClose();
        toast.success("Account created successfully");
      } catch (error) {
        console.log(error);
      }
    };

    if (!isOpen) return;

    return (
      <Modal.Wrapper>
        <Modal.Base ref={ref}>
          <Modal.Title>Add New Account</Modal.Title>
          <Modal.Form onSubmit={handleSubmit}>
            <Modal.InputWrapper>
              <Modal.InputTitle>Account Name</Modal.InputTitle>
              <Inputs.ModalMD
                ref={accountRef}
                type="text"
                placeholder="e.g., My Personal Savings"
              />

              <Modal.InputTitle>Bank Name</Modal.InputTitle>
              <Inputs.ModalMD
                ref={bankRef}
                type="text"
                placeholder="e.g., Global Bank"
              />

              {/* <S.InputTitle>Account Type</S.InputTitle>
              <Inputs.ModalMD type="text" placeholder="e.g., Global Bank" /> */}

              <Modal.InputTitle>Initial Balance</Modal.InputTitle>
              <Inputs.ModalMD
                ref={balanceRef}
                type="text"
                placeholder="e.g., 1000.00"
                value={money.value}
                onChange={money.onChange}
              />
            </Modal.InputWrapper>

            <Modal.ButtonsInputsWrapper>
              <Inputs.ModalCancelInput
                value="Cancel"
                onClick={() => onClose()}
              />
              <Inputs.ModalSubmit value="Save" />
            </Modal.ButtonsInputsWrapper>
          </Modal.Form>
        </Modal.Base>
      </Modal.Wrapper>
    );
  }
);

export default ModalAccount;
