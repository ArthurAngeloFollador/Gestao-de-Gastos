import React, { forwardRef } from "react";

import useOutsideClick from "../../../hooks/useOutsideClick";
import Modal from "../modalStyles";
import Input from "../../inputs/InputStyles";
import { useAuth } from "../../../hooks/useAuth";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalBudgets = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    useOutsideClick(ref as React.RefObject<HTMLDivElement>, onClose);

    const { createBudget } = useAuth();

    //handle form values
    const nameRef = React.useRef<HTMLInputElement>(null);
    const startDateRef = React.useRef<HTMLInputElement>(null);
    const endDateRef = React.useRef<HTMLInputElement>(null);
    const amountRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try{
        createBudget(
          // backend error in budgets
          nameRef.current?.value || "", //if value is null, use empty string
          new Date(startDateRef.current?.value || ""), //convert string to Date
          new Date(endDateRef.current?.value || ""),
          Number(amountRef.current?.value || 0), //convert string to number
          19,
        );
        onClose();
        console.log(startDateRef.current?.value);
      } catch (error) {
        console.log(error);
      }
    }

    if (!isOpen) return null;

    return (
      <>
      <Modal.Wrapper>
        <Modal.Base ref={ref}>
          <Modal.Title>Add a New Budget</Modal.Title>
          <Modal.Form onSubmit={handleSubmit}>
            <Modal.InputWrapper>
              <Modal.InputTitle>Budget Name</Modal.InputTitle>
              <Input.ModalMD type="text" placeholder="e.g., My Personal Savings" ref={nameRef} />

              <Modal.InputTitle>Amount</Modal.InputTitle>
              <Input.ModalMD type="number" placeholder="e.g., 1000.00" ref={amountRef} />

              <Modal.InputTitle>Initial Date</Modal.InputTitle>
              <Input.ModalMD type="date" placeholder="e.g., 2023-06-01" ref={startDateRef} />
              
              <Modal.InputTitle>end Date</Modal.InputTitle>
              <Input.ModalMD type="date" placeholder="e.g., 2023-06-01" ref={endDateRef} />

              <Modal.InputTitle>Category</Modal.InputTitle>
              <Input.ModalMD type="text" placeholder="e.g., Groceries" />

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

export default ModalBudgets;
