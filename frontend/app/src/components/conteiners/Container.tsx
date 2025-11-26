import { AiOutlinePlus } from "react-icons/ai";

import Buttons from "../buttons/ButtonStyles";
import * as S from "./conteinerStyled";

import { useRef, useState } from "react";

import ModalAccount from "../modals/modalAccounts/modalAccount";
import ModalTransactions from "../modals/modalTransactions/modalTransactions";
import ModalBudgets from "../modals/modalBudgets/modalBudgets";

interface props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  hasButton: boolean;
  buttonText?: string;
  // hasPlusIcon?: boolean;
  handleClickButton?: boolean;
}

function Container({
  children,
  title,
  description,
  hasButton,
  buttonText,
}: props) {
  // to close the modals
  const modalRef = useRef<HTMLDivElement>(null);

  // if the container has a button
  const [isModalAccountsOpen, setIsModalAccountsOpen] = useState(false);
  const [isModalTransactionsOpen, setIsModalTransactionsOpen] = useState(false);
  const [isModalBudgetsOpen, setIsModalBudgetsOpen] = useState(false);

  const handleOpenModals = () => {
    if (title === "Accounts") {
      setIsModalAccountsOpen(true);
    }
    if (title === "Transactions") {
      setIsModalTransactionsOpen(true);
    }
    if (title === "Budgets") {
      setIsModalBudgetsOpen(true);
    }
  };

  function Button() {
    return (
      <Buttons.Large onClick={handleOpenModals}>
        <div
          style={{
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <AiOutlinePlus style={{ color: "#f0f0f0", fontSize: "30px" }} />
          {buttonText}
        </div>
      </Buttons.Large>
    );
  }

  return (
    <>
      <S.ContainerPage>
        <S.ConteinerContent>
          <S.PageContainerHeader>

            <S.Text>
              <S.PageTitle>{title}</S.PageTitle>
              <S.LittleText>{description}</S.LittleText>
            </S.Text>

            {/* handle if the container has a button */}
            {hasButton ? <Button /> : null}
          </S.PageContainerHeader>
          {children}
        </S.ConteinerContent>
      </S.ContainerPage>
      {/* Modals */}
      {/* Accounts */}
      {isModalAccountsOpen ? (
        <ModalAccount
          isOpen={isModalAccountsOpen}
          onClose={() => setIsModalAccountsOpen(false)}
          ref={modalRef}
        />
      ) : null}

      {/* Transactions */}
      {isModalTransactionsOpen ? (
        <ModalTransactions
          isOpen={isModalTransactionsOpen}
          onClose={() => setIsModalTransactionsOpen(false)}
          ref={modalRef}
        />
      ) : null}

      {/* Budgets */}
      {isModalBudgetsOpen ? (
        <ModalBudgets
          isOpen={isModalBudgetsOpen}
          onClose={() => setIsModalBudgetsOpen(false)}
          ref={modalRef}
        />
      ) : null}
    </>
  );
}

export default Container;
