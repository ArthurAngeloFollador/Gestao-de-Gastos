import { useState } from "react";
import Card from "../../components/cards/Cards";
import Container from "../../components/conteiners/Container";
import BarGraph from "../../components/graphs/barGraph/BarGraph";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";

import * as S from "./reportsStyle";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import LineGraph from "../../components/graphs/lineGraph/LineGraps";
import Footer from "../../components/footer/Footer";
import Inputs from "../../components/inputs/InputStyles";
import Buttons from "../../components/buttons/ButtonStyles";

function Reports() {
  const [transactionType, setTransactionType] = useState("expense");

  // Just for testing before database
  const OnClickSpending = () => {
    setTransactionType("expense");
  };

  const OnClickIncome = () => {
    setTransactionType("income");
  };

  //   TODO: add media queries
  // Graphics Cards
  interface GraphProps {
    GraphType: "bar" | "line";
    title: string;
  }

  function GraphReportCard({ GraphType, title }: GraphProps) {
    const GraphToShow = GraphType === "bar" ? <BarGraph /> : <LineGraph />;

    const ShowPercentage = () => {
      return (
        <div>
          <Card.UpOrDownExpense className={transactionType}>
            +15%
          </Card.UpOrDownExpense>
        </div>
      );
    };

    return (
      <Card.DashboardBigCard>
        <Card.BigTitleCard>{title}</Card.BigTitleCard>
        <Card.CardMoney>$12345</Card.CardMoney>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Card.LowCardTittle>Last Month</Card.LowCardTittle>

          {transactionType === "income" ? (
            <Card.UpOrDownExpense className="income">
              <BsArrowUp className="income" fontSize="25px" />
              {ShowPercentage()}
            </Card.UpOrDownExpense>
          ) : (
            <Card.UpOrDownExpense className="expense">
              <BsArrowDown className="expense" fontSize="25px" />
              {ShowPercentage()}
            </Card.UpOrDownExpense>
          )}
        </div>
        <Card.CardGraph>{GraphToShow}</Card.CardGraph>
      </Card.DashboardBigCard>
    );
  }

  return (
    <>
      <Header />
      <Sidebar />
      <Container
        title="Reports"
        description="Analyze your financial data with detailed reports and visualizations."
        hasButton={false}
      >
        <S.ContentContainer>
          <S.ReportTypes>
            <S.ReportType
              onClick={() => OnClickSpending()}
              className={
                transactionType === "expense" ? "active" : transactionType
              }
            >
              Spending
            </S.ReportType>
            <S.ReportType
              onClick={() => OnClickIncome()}
              className={
                transactionType === "income" ? "active" : transactionType
              }
            >
              Income
            </S.ReportType>
          </S.ReportTypes>

          {/* Spending Card */}
          <S.CardsContainer>
            <S.InformationCardsCpntainer>
              <GraphReportCard GraphType="bar" title="Spending by Category" />
              <GraphReportCard GraphType="line" title="Spending Trends" />
            </S.InformationCardsCpntainer>

            <Card.ReportOptionsCard>
              <Card.BigTitleCard>Report Options</Card.BigTitleCard>

              <Card.InputContainer>
                <Card.LowCardTittle>Report Type</Card.LowCardTittle>

                <Card.InputOptions>
                  <option selected>Spending by Category</option>
                  <option>Income</option>
                </Card.InputOptions>
              </Card.InputContainer>

              <Card.InputContainer>
                <Card.LowCardTittle>Date Range</Card.LowCardTittle>

                <Card.InputOptions>
                  <option selected>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                  <option>All Time</option>
                </Card.InputOptions>
              </Card.InputContainer>
              <S.CheckboxContainer>
                <Inputs.Checkbox />
                Include internal transfers
              </S.CheckboxContainer>
              <S.SubmitButtons>
                <Buttons.SubmitSmall>Generate Report</Buttons.SubmitSmall>
                <Buttons.SubmitSmallLite>Export as PDF</Buttons.SubmitSmallLite>
              </S.SubmitButtons>
            </Card.ReportOptionsCard>
          </S.CardsContainer>
        </S.ContentContainer>
        <Footer />
      </Container>
    </>
  );
}

export default Reports;
