import React from "react";
import { forwardRef } from "react";

import { useAuth } from "../../../hooks/useAuth";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useMoneyMask } from "../../../hooks/useMoneyMask";

import Modal from "../modalStyles";
import Input from "../../inputs/InputStyles";
import toast from "react-hot-toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalTransactions = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    useOutsideClick(ref as React.RefObject<HTMLDivElement>, onClose);

    const money = useMoneyMask("$0.00");

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

      if (
        !descriptionRef.current?.value ||
        !amountRef.current?.value ||
        !dateRef.current?.value ||
        !categoryRef.current?.value ||
        !accountRef.current?.value
      ) {
        return toast.error("Please fill in all fields");
      }

      try {
        createTransaction(
          descriptionRef.current?.value || "", //if value is null, use empty string
          money.getRawValue() || 0,
          categoryRef.current?.value || "",
          new Date(dateRef.current?.value || ""), //convert string to Date
          accountRef.current?.value || "",
          19
        );
        onClose();
        toast.success("Transaction created successfully");
      } catch (error) {
        toast.error("Error creating transaction");
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
                <Input.ModalMD
                  type="text"
                  placeholder="e.g., Monthly Rent"
                  ref={descriptionRef}
                />

                <Modal.InputTitle>Amount</Modal.InputTitle>
                <Input.ModalMD
                  type="text"
                  placeholder="e.g., 100.00"
                  ref={amountRef}
                  value={money.value}
                  onChange={money.onChange}
                />

                <Modal.InputTitle>Date</Modal.InputTitle>
                <Input.ModalMD
                  type="date"
                  placeholder="e.g., 2023-06-01"
                  ref={dateRef}
                />

                <Modal.InputTitle>Category</Modal.InputTitle>
                <Input.ModalMD
                  type="text"
                  placeholder="e.g., Groceries"
                  ref={categoryRef}
                />

                <Modal.InputTitle>Account</Modal.InputTitle>
                <Input.ModalMD
                  type="text"
                  placeholder="e.g., Savings"
                  ref={accountRef}
                />

                {/* submit & cancel */}
                <Modal.ButtonsInputsWrapper>
                  <Input.ModalCancelInput
                    type="button"
                    value="Cancel"
                    onClick={onClose}
                  />
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
