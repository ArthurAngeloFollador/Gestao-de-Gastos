import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import Card from "../../components/cards/Cards";
import Container from "../../components/conteiners/Container";
import BarGraph from "../../components/graphs/barGraph/BarGraph";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import LineGraph from "../../components/graphs/lineGraph/LineGraps";
import Inputs from "../../components/inputs/InputStyles";
import Buttons from "../../components/buttons/ButtonStyles";

import * as S from "./reportsStyle";

import { formatCurrency } from "../../utils/formatters";

function Reports() {
  const [transactionType, setTransactionType] = useState("expense");

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
        <Card.CardMoney>
          {formatCurrency(125000, { showPlusForPositive: false })}
        </Card.CardMoney>

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

                <Card.InputOptions value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
                  <option value={"expense"} selected>Spending</option>
                  <option value={"income"}>Income</option>
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
