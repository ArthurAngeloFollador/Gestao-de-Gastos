import styled from "styled-components";
import { forwardRef } from "react";
import React from "react";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: #f0f0f0;

  display: flex;
  align-items: center;
  justify-content: center;


  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  z-index: 1000;
`;

const ModalBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #313131;
  padding: 2rem;
  border-radius: 16px;
  width: 400px;
  height: auto;

  max-height: 96%;

  /* animation */
  box-shadow: 12px 15px 10px rgba(0, 0, 0, 0.4);
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// modal
const ModalTitle = styled.p`
  text-align: center;
  font-size: 1.8rem;
`;

const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  appearance: none;
  -webkit-appearance: none;
  margin-top: 1.8rem;
`;

const InputTitle = styled.p`
  text-align: start;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

// submit & cancel
const ButtonsInputsWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: end;
  align-items: center;
`;

// Notifications Dropdown
const NotificationBase = styled(ModalBase)`
  display: flex;
  position: absolute;
  top: 80px;
  right: 30px;
  min-height: 100px;
  height: auto;
  width: 350px;
  align-content: center;
  padding: 1rem 0 9rem 0;
`;

const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`;

const Notification = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`;

type Props = {
  children: React.ReactNode;
}

interface FormProps extends Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Modal = () => null;

Modal.Wrapper = ({ children }: Props) => (
  <ModalWrapper>{children}</ModalWrapper>
);

Modal.Base = forwardRef<HTMLDivElement, Props>(({ children }, ref) => (
  <ModalBase ref={ref}>{children}</ModalBase>
));

Modal.Title = ({ children }: Props) => <ModalTitle>{children}</ModalTitle>;

Modal.Form = ({ children, onSubmit }: FormProps) => (
  <FormModal onSubmit={onSubmit}>{children}</FormModal>
);

Modal.InputWrapper = ({ children }: Props) => (
  <InputWrapper>{children}</InputWrapper>
);

Modal.InputTitle = ({ children }: Props) => <InputTitle>{children}</InputTitle>;

Modal.ButtonsInputsWrapper = ({ children }: Props) => (
  <ButtonsInputsWrapper>{children}</ButtonsInputsWrapper>
);

Modal.NotificationBase = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => (
    <NotificationBase ref={ref}>{children}</NotificationBase>
  )
);

Modal.NotificationContent = ({ children }: Props) => (
  <NotificationContent>{children}</NotificationContent>
);

Modal.Notification = ({ children }: Props) => (
  <Notification>{children}</Notification>
);

export default Modal;
