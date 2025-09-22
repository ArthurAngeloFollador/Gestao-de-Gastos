import BigButtonStyled from "../buttons/big_Button_Style";
import { HeaderStyled, Links, LoginButtons, Logo } from "./header_Style";

function Header() {
  return (
    <>
      <HeaderStyled>
        <Logo>
          <img src="./src/assets/logo_no_bg.png" alt="logo" />
          <h1>FinControl</h1>
        </Logo>
        <Links>
        <p>Home</p>
        <p>About</p>
        <p>Prices</p>
        <p>Contact</p>
        </Links>
        <LoginButtons>
          <p> Log In</p>
          <BigButtonStyled> Sign Up</BigButtonStyled>
        </LoginButtons>
      </HeaderStyled>
    </>
  );
}

export default Header;
