import { Buttons, CardStyled, CardText, CardTitle } from "./card_Style";
import BigButtonStyled from "../buttons/big_Button_Style";

function Card() {
  return (
    <>
      <CardStyled>
        <CardTitle>Take control of your finances</CardTitle>
        <CardText>
          <p>A simple and smart way to manage your expenses, </p>
          <p>save money and achieve your financial goals.</p>
        </CardText>
        <Buttons>
          <BigButtonStyled style={{ width: "250px", height: "55px" }}>
            Create Free Account
          </BigButtonStyled>
          <p>View Demo</p>
        </Buttons>
      </CardStyled>
    </>
  );
}

export default Card;
