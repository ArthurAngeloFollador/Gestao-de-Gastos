import { useNavigate } from "react-router";
import { useRef, useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { HeaderStyled, Logo, HeaderButtons, ProfilePic } from './header_Style';
import Buttons from "../buttons/ButtonStyles";
import ProfileDropDownMenu from "../modals/profileDropDownMenu/profileDropDown";

import LogoNoBg from "../../assets/imgs/logo_no_bg.png";
import ProfilePicture from "../../assets/imgs/ProfilePic.png"
import useOutsideClick from "../../hooks/useOutsideClick";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); //  Ref to the dropdown menu

  // Close the dropdown menu if the user clicks outside
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const onLogoClick = () => navigate("/");

  // Function to open the dropdown menu
  function onClickProfilePic() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderStyled>
      <Logo>
        <img src={LogoNoBg} />
        <h1 onClick={() => onLogoClick()}>MoneyControl</h1>
      </Logo>

      <HeaderButtons>
        {isAuthenticated ? (

          <div style={{position: "relative"}} ref={dropdownRef}>
            <ProfilePic>
              <img src={ProfilePicture} onClick={onClickProfilePic} />
            </ProfilePic>
            {/* Dropdown menu */}
              <ProfileDropDownMenu isOpen={isOpen}/>
          </div>

        ) : (

          <>
            <Buttons.SmallBlinking onClick={() => navigate("/login")}>
              Log In
            </Buttons.SmallBlinking>
            <Buttons.Small onClick={() => navigate("/signup")}>
              Sign Up
            </Buttons.Small>
          </>

        )}

      </HeaderButtons>
    </HeaderStyled>
  );
}

export default Header;
