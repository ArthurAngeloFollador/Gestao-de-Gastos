import Header from "../../components/header/header";
import {
  InitialPageStyled,
  InitialPageTitle,
  InitialPageTextHero,
  HeroButtons,
  Ad,
  Cards,
  Card,
  ImageDiv,
  AllCardText,
  CardTittle,
  CardText,
  AdTitle,
  AdText,
} from "./initialPageStyle";
import Footer from "../../components/footer/Footer.tsx";
// import BigButtonStyled from "../../components/buttons/big_Button_Style";
import Buttons from "../../components/buttons/ButtonStyles.tsx";
import Graph from "../../assets/svgs/graphIcon.svg";
import Bell from "../../assets/svgs/bell.svg";
import Dollar from "../../assets/svgs/dollar.svg";

function InitialPage() {
  return (
    <>
      <Header />

      <InitialPageStyled>
        <InitialPageTitle>Take control of your finances</InitialPageTitle>
        <InitialPageTextHero>
          <p>A simple and smart way to manage your expenses, </p>
          <p>save money and achieve your financial goals.</p>
        </InitialPageTextHero>
        <HeroButtons>
          <Buttons.Large>Create Free Account</Buttons.Large>
          <Buttons.LargeNoBg>View Demo</Buttons.LargeNoBg>
        </HeroButtons>
      </InitialPageStyled>

      <Ad>
        <AdTitle>Everything you need in one place</AdTitle>
        <AdText>Control your spending with our intuitive tools</AdText>
        <Cards>
          <Card>
            <ImageDiv>
              <img src={Dollar} alt="dollar" />
            </ImageDiv>
            <AllCardText>
              <CardTittle>Smart Budgets</CardTittle>
              <CardText>
                Create monthly budgets and track your progress so you don't
                spend more than planned.
              </CardText>
            </AllCardText>
          </Card>

          <Card>
            <ImageDiv>
              <img
                src={Graph}
                alt="graph"
                style={{ transform: "rotate(270deg)" }}
              />
            </ImageDiv>
            <AllCardText>
              <CardTittle>Detailed Reports</CardTittle>
              <CardText>
                Visualize your spending by category, period, and merchant with
                easy-to-understand charts.
              </CardText>
            </AllCardText>
          </Card>

          <Card>
            <ImageDiv>
              <img src={Bell} alt="bell" />
            </ImageDiv>
            <AllCardText>
              <CardTittle>Bill Alerts</CardTittle>
              <CardText>
                Receive reminders for bills to pay so you never have to worry
                about interest and late fees again.
              </CardText>
            </AllCardText>
          </Card>
        </Cards>
      </Ad>

      <Footer />
    </>
  );
}

export default InitialPage;
