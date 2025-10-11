import { IoFastFoodOutline } from "react-icons/io5";

import * as S from "./budgetsStyle";

import Container from "../../components/conteiners/Container";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Budgets() {
  const budgets = [
    {
      category: "Housing",
      current: 1200,
      target: 2000,
    },
    {
      category: "Food",
      current: 500,
      target: 800,
    },
    {
      category: "Transportation",
      current: 300,
      target: 500,
    },
    {
      category: "Entertainment",
      current: 200,
      target: 400,
    },
  ];

  return (
    <>
      <Header />
      <Sidebar />
      <Container
        title="Budgets"
        hasButton={true}
        hasPlusIcon={true}
        buttonText="New Budget"
      >
        {/* Overview */}
        <S.PageSubtitle>Overview</S.PageSubtitle>
        <S.OverviewContainer>
          <S.Overviews>
            <S.OverviewTitle>Total Budget</S.OverviewTitle>

            <S.OverviewAmount>$2,000.00</S.OverviewAmount>
          </S.Overviews>

          <S.Overviews>
            <S.OverviewTitle>Total Spent</S.OverviewTitle>

            <S.OverviewAmount>$1,000.00</S.OverviewAmount>
          </S.Overviews>
        </S.OverviewContainer>

        {/* Categories */}
        <S.PageSubtitle>Categories</S.PageSubtitle>
        <S.Categories>
          {budgets.map((budget) => {
return (
            <S.Category>
              <S.TitleAndIcon>
                <S.CategoryIcon>
                  <IoFastFoodOutline size={38} />
                </S.CategoryIcon>

                <S.CategoryText>
                  <S.CategoryTitle>{budget.category}</S.CategoryTitle>
                  <S.CategoryAmount>{budget.current}/{budget.target}</S.CategoryAmount>
                </S.CategoryText>
              </S.TitleAndIcon>

              <S.CategoryProgressBarConteiner>
                <ProgressBar percentage={(budget.current / budget.target) * 100} showPercentage={true} />
              </S.CategoryProgressBarConteiner>
            </S.Category>)
          })}

        </S.Categories>
      </Container>
    </>
  );
}

export default Budgets;
