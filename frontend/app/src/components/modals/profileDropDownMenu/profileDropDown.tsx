import { forwardRef } from "react";
import * as S from "./profileDropDownStyle";

import { FaRegUser } from "react-icons/fa";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import { GoQuestion } from "react-icons/go";

import ProfilePicture from "../../../assets/imgs/ProfilePic.png";

import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

interface Props {
  isOpen: boolean;
}

const iconProps = {
  size: 20,
  color: "#f0f0f0",
}

const ProfileDropDown = forwardRef<HTMLDivElement, Props>(({ isOpen }, ref) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function onLogoutClick() {
    logout();
    navigate("/login");
  }

  if (!isOpen) return null;

  return (
    <S.DropDownBase ref={ref}>
      <S.ProfilePicAndName>
        <img src={ProfilePicture} />
        <S.NameAt>
          <S.Name>{user?.name}</S.Name>
          <S.At>{user?.email}</S.At>
        </S.NameAt>
      </S.ProfilePicAndName>

      <S.Links>
        <S.Link onClick={() => navigate("/profile")}>
          <FaRegUser size={iconProps.size} color={iconProps.color} />
          Profile Settings
          <IoIosArrowForward size={iconProps.size} color={iconProps.color} />
        </S.Link>
        <S.Link>
          <GoQuestion size={iconProps.size} color={iconProps.color} />
          Help & Support
          <IoIosArrowForward size={iconProps.size} color={iconProps.color} />
        </S.Link>
      </S.Links>

      <S.Logout onClick={() => onLogoutClick()}>
        <IoIosLogOut size={iconProps.size} color={iconProps.color} />
        Logout
      </S.Logout>
    </S.DropDownBase>
  );
});

export default ProfileDropDown;
