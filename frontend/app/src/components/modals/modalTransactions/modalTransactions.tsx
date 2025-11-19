import { forwardRef } from "react";

import useOutsideClick from "../../../hooks/useOutsideClick";
import Modal from '../modalStyles';
import Input from '../../inputs/InputStyles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalTransactions = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    useOutsideClick(ref as React.RefObject<HTMLDivElement>, onClose);

    function handleSubmit(){
        return;
    }

    if (!isOpen) return null;

    return (
      <>
        <Modal.Wrapper>
          <Modal.Base ref={ref}>
            <Modal.Title>Add a New Transaction</Modal.Title>
            <Modal.Form onSubmit={() => handleSubmit()}>
                <Modal.InputWrapper>
                    <Modal.InputTitle>Description</Modal.InputTitle>
                    <Input.ModalMD type="text" placeholder="e.g., Monthly Rent" />

                    <Modal.InputTitle>Amount</Modal.InputTitle>
                    <Input.ModalMD type="number" placeholder="e.g., 100.00" />

                    <Modal.InputTitle>Date</Modal.InputTitle>
                    <Input.ModalMD type="date" placeholder="e.g., 2023-06-01" />

                    <Modal.InputTitle>Category</Modal.InputTitle>
                    <Input.ModalMD type="text" placeholder="e.g., Groceries" />

                    <Modal.InputTitle>Account</Modal.InputTitle>
                    <Input.ModalMD type="text" placeholder="e.g., Savings" />

                    {/* submit & cancel */}
                    <Modal.ButtonsInputsWrapper>
                        <Input.ModalCancelInput type="button" value="Cancel" onClick={onClose} />
                        <Input.ModalSubmit type="submit" value="Submit" />
                    </Modal.ButtonsInputsWrapper>
                </Modal.InputWrapper>
            </Modal.Form>
          </Modal.Base>
        </Modal.Wrapper>
      </>
    );
  }
);

export default ModalTransactions;
