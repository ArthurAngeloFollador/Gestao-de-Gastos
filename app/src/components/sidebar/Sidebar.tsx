import * as S from "./sidebarStyle";
import Dashboard from "../../assets/svgs/icons/dashboardIcon.svg";
import Bank from "../../assets/svgs/icons/bankIcon.svg";
import Transactions from "../../assets/svgs/icons/transactionsIcon.svg";
import Dollar from "../../assets/svgs/icons/dollarIcon.svg";
import Graph from "../../assets/svgs/icons/graphIcon.svg";

function Sidebar() {
  return (
    <>
      <S.SidebarStyled>
        <S.SidebarLinks>
          <S.SidebarLink>
            <img src={Dashboard} alt="dashboardSidebar" />
            Dashboard
          </S.SidebarLink>
          <S.SidebarLink>
            <img src={Bank} alt="accountsSidebar" />
            Accounts
          </S.SidebarLink>
          <S.SidebarLink>
            <img src={Transactions} alt="transactionsSidebar" />
            Transactions
          </S.SidebarLink>
          <S.SidebarLink>
            <img src={Dollar} alt="budgetsSidebar" />
            Budgets
          </S.SidebarLink>
          <S.SidebarLink>
            <img src={Graph} alt="reportsSidebar" />
            Reports
          </S.SidebarLink>
        </S.SidebarLinks>
      </S.SidebarStyled>
    </>
  );
}

export default Sidebar;
