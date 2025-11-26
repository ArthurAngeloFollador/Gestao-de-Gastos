import { useNavigate } from "react-router";
import { useRef, useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import * as S from "./header_Style";
import Buttons from "../buttons/ButtonStyles";

import { CiBellOn } from "react-icons/ci";

import ProfileDropDownMenu from "../modals/profileDropDownMenu/profileDropDown";
import NotificationsDropDownMenu from "../modals/notificationsDropDownMenu/notificationsDropDownMenu";

import LogoNoBg from "../../assets/imgs/logo_no_bg.png";
import ProfilePicture from "../../assets/imgs/ProfilePic.png";
import useOutsideClick from "../../hooks/useOutsideClick";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [isOpen, setIsOpen] = useState(false);//for profilepic dropdown
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); //  Ref to the dropdown menu

  // for the future
  // const [hasNotification, setHasNotification] = useState(false);
  // const [className, setClassName] = useState("notification");

  // Close the dropdown menu if the user clicks outside
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const onLogoClick = () => navigate("/");

  // Function to open the dropdown menu
  function onClickProfilePic() {
    setIsOpen(!isOpen);
  }

  function onClickNotification() {
    setIsNotificationOpen(!isNotificationOpen);
  }

  // for the future
  // function handleNotification() {
  //   if(hasNotification){
  //     setClassName("notification");
  //     return className;
  //   }
  //   return className
  // }

  return (
    <S.HeaderStyled>
      <S.Logo>
        <img src={LogoNoBg} />
        <h1 onClick={() => onLogoClick()}>MoneyControl</h1>
      </S.Logo>

      <S.HeaderButtons>
        {isAuthenticated ? (
          <>
          <S.ProfilePicToBell>
            {/* Notifications menu */}
            <S.BellWrapper>
              <CiBellOn size={30} color="#f0f0f0" onClick={() => onClickNotification()} />
            </S.BellWrapper>
            <div style={{ position: "relative" }} ref={dropdownRef}>
              <S.ProfilePic>
                <img src={ProfilePicture} onClick={onClickProfilePic} />
              </S.ProfilePic>
              {/* Dropdown menu */}
              <ProfileDropDownMenu isOpen={isOpen} />
            </div>
          </S.ProfilePicToBell>
            <NotificationsDropDownMenu isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} ref={dropdownRef} />
          </>
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
      </S.HeaderButtons>
    </S.HeaderStyled>
  );
}

export default Header;
