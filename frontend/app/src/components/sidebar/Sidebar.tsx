import * as S from "./sidebarStyle";
import Dashboard from "../../assets/svgs/icons/dashboardIcon.svg";
import Bank from "../../assets/svgs/icons/bankIcon.svg";
import Transactions from "../../assets/svgs/icons/transactionsIcon.svg";
import Dollar from "../../assets/svgs/icons/dollarIcon.svg";
import Graph from "../../assets/svgs/icons/graphIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.substring(1);

  console.log(currentPath);

  function handleClick(NavigateTo: string) {
    if (NavigateTo) {
      navigate(`/${NavigateTo}`);
    }
  }

  return (
    <>
      <S.SidebarStyled>
        <S.SidebarLinks>
          <S.SidebarLink
            $isActive={currentPath === "dashboard"}
            onClick={() => handleClick("dashboard")}
          >
            <img src={Dashboard} alt="dashboardSidebar" />
            Dashboard
          </S.SidebarLink>
          <S.SidebarLink
            $isActive={currentPath === "accounts"}
            onClick={() => handleClick("accounts")}
          >
            <img src={Bank} alt="accountsSidebar" />
            Accounts
          </S.SidebarLink>
          <S.SidebarLink
            $isActive={currentPath === "transactions"}
            onClick={() => handleClick("transactions")}
          >
            <img src={Transactions} alt="transactionsSidebar" />
            Transactions
          </S.SidebarLink>
          <S.SidebarLink
            $isActive={currentPath === "budgets"}
            onClick={() => handleClick("budgets")}
          >
            <img src={Dollar} alt="budgetsSidebar" />
            Budgets
          </S.SidebarLink>
          <S.SidebarLink
            $isActive={currentPath === "reports"}
            onClick={() => handleClick("reports")}
          >
            <img src={Graph} alt="reportsSidebar" />
            Reports
          </S.SidebarLink>
        </S.SidebarLinks>
      </S.SidebarStyled>
    </>
  );
}

export default Sidebar;
