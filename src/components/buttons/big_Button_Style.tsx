import styled from "styled-components";

const BigButtonStyled = styled.button`
  cursor: pointer;
  color: #f0f0f0;
  /* font-weight: bold; */
  font-size: 18px;
  background-color: #3b82f6;
  width: 120px;
  height: 45px;
  border-radius: 10px;
  border: none;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px 1px #3b82f6;
  }
`;

export default BigButtonStyled;
