import { IoFastFoodOutline } from "react-icons/io5";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import React, { useState } from "react";

import { formatCurrency } from "../../utils/formatters";

import * as S from "./budgetsStyle";

import Container from "../../components/conteiners/Container";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Footer from "../../components/footer/Footer";

function Budgets() {
  // Just for testing
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

  // just for testing
  // const amounts = [
  //   {
  //     name: "Total Budget",
  //     amount: "$2,000.00",
  //   },
  //   {
  //     name: "Total Spent",
  //     amount: "$1,500.00",
  //   },
  // ]

  // Amount visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const mode = isPasswordVisible ? "signed" : "masked";

  // Function to toggle visibility
  function toggleEyeIcon() {
    setIsPasswordVisible((prev) => !prev); // toggle the state using the previous value
  }

  // Funtion to show eye icon
  type ShowEyeIconProps = {
    isVisible: boolean;
    onClick: () => void;
  };

  function ShowEyeIcon({
    isVisible,
    onClick,
  }: ShowEyeIconProps): React.ReactElement {
    const Icon = isVisible ? BsEye : BsEyeSlash; // Switch between eye and eye-slash icons
    return <Icon size={36} color="#f0f0f0" onClick={onClick} />; // Render the icon using the constant
  }

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
            {/* first Card */}
            <S.TitleAndAmount>
              <S.OverviewTitle>Total Budget</S.OverviewTitle>

              <S.OverviewAmount>
                { formatCurrency(2000, { mode, currency: "USD", showPlusForPositive: false }) }
              </S.OverviewAmount>
            </S.TitleAndAmount>

            <S.OverviewIcon>
              <ShowEyeIcon
                isVisible={isPasswordVisible}
                onClick={toggleEyeIcon}
              />
            </S.OverviewIcon>
          </S.Overviews>

          <S.Overviews>
            {/* second Card */}
            <S.TitleAndAmount>
              <S.OverviewTitle>Total Spent</S.OverviewTitle>

             <S.OverviewAmount>
                { formatCurrency(1500, { currency: "USD", showPlusForPositive: false }) }
              </S.OverviewAmount>
            </S.TitleAndAmount>
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
                    <S.CategoryAmount>
                      {budget.current}/{budget.target}
                    </S.CategoryAmount>
                  </S.CategoryText>
                </S.TitleAndIcon>

                <S.CategoryProgressBarConteiner>
                  <ProgressBar
                    percentage={(budget.current / budget.target) * 100}
                    showPercentage={true}
                  />
                </S.CategoryProgressBarConteiner>
              </S.Category>
            );
          })}
        </S.Categories>
        <Footer />
      </Container>
    </>
  );
}

export default Budgets;
