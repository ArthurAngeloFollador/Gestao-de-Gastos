import styled from "styled-components";

export const SidebarStyled = styled.div`
  position: fixed;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 100%;
  margin-top: 0;
  left: 0;
  color: #f0f0f0;
  padding: 60px 20px 20px 0px;
  z-index: 10;

  background-color: #171717;
`;

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  top: 40px;
  gap: 5px;
  padding: 5px 10px;
  border-right: 1px solid #4d4d4d;
`;

export const SidebarLink = styled.div<{ $isActive?: boolean }>`
  cursor: pointer;
  user-select: none;
  display: flex;
  padding: 15px 10px;
  align-items: center;
  background-color: transparent;
  width: 100%;
  font-size: 16px;
  gap: 8px;
  border-radius: 10px;
  transition: background-color 0.5s ease-in-out;

  background-color: ${(props) => {
    if (props.$isActive) {
      return "#3a3a3a92";
    }
  }};
  /* margin-left: ${(props) => {
    if (props.$isActive) {
      return ".6rem";
    }
  }}; */

  & img {
    width: 30px;
    height: 30px;
    background: transparent;
    -webkit-user-drag: none;
  }

  &:hover {
    background-color: #4d4d4d92;
  }
`;
