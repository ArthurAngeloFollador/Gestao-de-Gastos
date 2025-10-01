import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar.tsx";
import * as S from "./dashboardStyle.tsx";

function Dashboard() {
  return (
    <>
      <Header />
      <S.DashboardContainer>
          <Sidebar />
        <S.DashboardContent>
          <S.DashboardTitle>Dashboard</S.DashboardTitle>
        </S.DashboardContent>
      </S.DashboardContainer>
    </>
  );
}

export default Dashboard;
