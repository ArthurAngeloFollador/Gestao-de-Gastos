import React, { forwardRef } from "react";

import useOutsideClick from "../../../hooks/useOutsideClick";
import Modal from "../modalStyles";
import Input from "../../inputs/InputStyles";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalBudgets = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    useOutsideClick(ref as React.RefObject<HTMLDivElement>, onClose);

    const { createBudget } = useAuth();

    //handle form values
    const budgetNameRef = React.useRef<HTMLInputElement>(null);
    const periodTypeRef = React.useRef<HTMLSelectElement>(null);
    const startDateRef = React.useRef<HTMLInputElement>(null);
    const endDateRef = React.useRef<HTMLInputElement>(null);
    const totalBudgetRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      //check if all fields are filled
      if (
        !budgetNameRef.current?.value ||
        !periodTypeRef.current?.value ||
        !startDateRef.current?.value ||
        !endDateRef.current?.value ||
        !totalBudgetRef.current?.value
      ) {
        return toast.error("Please fill in all fields");
      }

      try {
        createBudget(
          budgetNameRef.current?.value || "", //if value is null, use empty string
          periodTypeRef.current?.value || "",
          new Date(startDateRef.current?.value || ""), //convert string to Date
          new Date(endDateRef.current?.value || ""),
          Number(totalBudgetRef.current?.value || 0), //convert string to number
          19
        );
        onClose();
        console.log(startDateRef.current?.value);
      } catch (error) {
        console.log(error);
      }
    };

    if (!isOpen) return null;

    return (
      <>
        <Modal.Wrapper>
          <Modal.Base ref={ref}>
            <Modal.Title>Add a New Budget</Modal.Title>
            <Modal.Form onSubmit={handleSubmit}>
              <Modal.InputWrapper>
                <Modal.InputTitle>Budget Name</Modal.InputTitle>
                <Input.ModalMD
                  type="text"
                  placeholder="e.g., My Personal Savings"
                  ref={budgetNameRef}
                />

                <Modal.InputTitle>Amount</Modal.InputTitle>
                <Input.ModalMD
                  type="number"
                  // inputMode="numeric"
                  // pattern="[0-9]"
                  placeholder="e.g., 1000.00"
                  ref={totalBudgetRef}
                />

                {/* Select Input */}
                <Modal.InputTitle>Period Type</Modal.InputTitle>
                <Input.SelectPeriodType
                  // value="e.g., Monthly"
                  ref={periodTypeRef}
                >
                  <option value="WEEKLY">Weekly</option>
                  <option value="MONTHLY">Monthly</option>
                  <option value="BIMONTHLY">Bimonthly</option>
                  <option value="QUARTERLY">uarterly</option>
                  <option value="YEARLY">Monthly</option>
                  </Input.SelectPeriodType>

                {/* Dates inputs */}
                <Modal.DatesInputContainer>
                  <div>
                    <Modal.InputTitle>Initial Date</Modal.InputTitle>
                    <Input.ModalDates
                      ref={startDateRef}
                    />
                  </div>
                  <div>
                    <Modal.InputTitle>End Date</Modal.InputTitle>
                    <Input.ModalDates
                      ref={endDateRef}
                    />
                  </div>
                </Modal.DatesInputContainer>

                <Modal.InputTitle>Category</Modal.InputTitle>
                <Input.ModalMD type="text" placeholder="e.g., Groceries" />

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

export default ModalBudgets;
