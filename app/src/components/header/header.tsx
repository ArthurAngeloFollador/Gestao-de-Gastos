import { useNavigate } from "react-router";
import { HeaderStyled, Logo, HeaderButtons } from "./header_Style";
import Buttons from "../buttons/ButtonStyles";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // pegando user e logout do hook

  return (
    <HeaderStyled>
      <Logo>
        <img src="./src/assets/imgs/logo_no_bg.png" alt="logo" />
        <h1>MoneyControl</h1>
      </Logo>

      {/* <Links>
        <p onClick={() => navigate("/dashboard")}>Dashboard</p>
        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/prices")}>Prices</p>
        <p onClick={() => navigate("/contact")}>Contact</p>
      </Links> */}

      <HeaderButtons>
        {user ? (
          <>
            {console.log("batata")}
            
            <Buttons.Small onClick={logout}>Sair</Buttons.Small>
          </>
        ) : (
          <>
            <Buttons.SmallBlinking onClick={() => navigate("/login")}>Log In</Buttons.SmallBlinking>
            <Buttons.Small onClick={() => navigate("/signup")}>Sign Up</Buttons.Small>
          </>
        )}
      </HeaderButtons>
    </HeaderStyled>
  );
}

export default Header;
