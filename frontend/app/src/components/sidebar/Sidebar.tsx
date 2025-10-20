import * as S from "./sidebarStyle";
import Dashboard from "../../assets/svgs/icons/dashboardIcon.svg";
import Bank from "../../assets/svgs/icons/bankIcon.svg";
import Transactions from "../../assets/svgs/icons/transactionsIcon.svg";
import Dollar from "../../assets/svgs/icons/dollarIcon.svg";
import Graph from "../../assets/svgs/icons/graphIcon.svg";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  return (
    <>
      <S.SidebarStyled>
        <S.SidebarLinks>
          <S.SidebarLink onClick={() => navigate("/dashboard")}>
            <img src={Dashboard} alt="dashboardSidebar" />
            Dashboard
          </S.SidebarLink>
          <S.SidebarLink onClick={() =>navigate("/accounts")}>
            <img src={Bank} alt="accountsSidebar" />
            Accounts
          </S.SidebarLink>
          <S.SidebarLink onClick={() =>navigate("/transactions")}>
            <img src={Transactions} alt="transactionsSidebar" />
            Transactions
          </S.SidebarLink>
          <S.SidebarLink onClick={() =>navigate("/budgets")}>
            <img src={Dollar} alt="budgetsSidebar" />
            Budgets
          </S.SidebarLink>
          <S.SidebarLink onClick={() =>navigate("/reports")}>
            <img src={Graph} alt="reportsSidebar" />
            Reports
          </S.SidebarLink>
        </S.SidebarLinks>
      </S.SidebarStyled>
    </>
  );
}

export default Sidebar;
