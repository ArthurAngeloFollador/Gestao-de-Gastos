import React from "react";
import { forwardRef } from "react";

import { useAuth } from "../../../hooks/useAuth";
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

    const { createTransaction } = useAuth();

    // TODO check the useAuth hook
    // handle form values
    const descriptionRef = React.useRef<HTMLInputElement>(null);
    const amountRef = React.useRef<HTMLInputElement>(null);
    const dateRef = React.useRef<HTMLInputElement>(null);
    const categoryRef = React.useRef<HTMLInputElement>(null);
    const accountRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        createTransaction(
          descriptionRef.current?.value || "", //if value is null, use empty string
          Number(amountRef.current?.value || 0), //convert string to number
          categoryRef.current?.value || "",
          new Date(dateRef.current?.value || ""), //convert string to Date
          accountRef.current?.value || "",
          19,
        );
        onClose();
      } catch (error) {
        console.log(error);
      }

    };

    if (!isOpen) return null;

    return (
      <>
        <Modal.Wrapper>
          <Modal.Base ref={ref}>
            <Modal.Title>Add a New Transaction</Modal.Title>
            <Modal.Form onSubmit={handleSubmit}>
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
