import { useNavigate } from "react-router";
import { HeaderStyled, Links, Logo, HeaderButtons } from "./header_Style";
import Buttons from "../buttons/ButtonStyles";

function Header() {
  const navigate = useNavigate();

  function onHomeClick() {
    console.log("maconha 2");

    navigate(`/teste`);
  }

  return (
    <>
      <HeaderStyled>
        <Logo>
          <img src="./src/assets/imgs/logo_no_bg.png" alt="logo" />
          <h1>MoneyControl</h1>
        </Logo>

        <Links>
          <p>Home</p>
          <p
            onClick={() => {
              console.log("maconha ");

              onHomeClick();
            }}
          >
            About
          </p>
          <p>Prices</p>
          <p>Contact</p>
        </Links>

        <HeaderButtons>
          <Buttons.SmallBlinking>Log In</Buttons.SmallBlinking>
          <Buttons.Small>Sign Up</Buttons.Small>
        </HeaderButtons>
      </HeaderStyled>
    </>
  );
}

export default Header;
