import { CiBellOn } from "react-icons/ci";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 5px;
  padding-right: 30px;
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.body};
  border-bottom: 1px solid ${({ theme }) => theme.colors.boxShadow};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.boxShadow};
`;

export const BellIcon = styled(CiBellOn)`
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  user-select: none;

  & img {
    -webkit-user-drag: none;
    width: 80px;
    height: 80px;
    background: transparent;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ProfilePic = styled.div`
  -webkit-user-drag: none;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;

  & img {
    -webkit-user-drag: none;
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

export const ProfilePicToBell = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  position: relative;
`;

export const BellWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 50%;
  }
`;
