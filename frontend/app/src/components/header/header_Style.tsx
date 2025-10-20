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
  background-color: #171717;
  color: #f0f0f0;
  border-bottom: 1px solid black;
  box-shadow: 0 0 10px #000000;
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

// export const Links = styled.div`
//   display: flex;
//   gap: 50px;

//   & p {
//     cursor: pointer;
//   }
// `;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
