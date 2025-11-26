import { forwardRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Modal from "../modalStyles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsDropDownMenu = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    useOutsideClick(ref as React.RefObject<HTMLDivElement>, onClose);

    if (!isOpen) return null;

    return (
      <Modal.NotificationBase ref={ref}>
        <Modal.Title>Notifications</Modal.Title>
        <Modal.NotificationContent>
          <Modal.Notification>
            Your notifications will appear here
          </Modal.Notification>
        </Modal.NotificationContent>
      </Modal.NotificationBase>
    );
  }
);

export default NotificationsDropDownMenu;
