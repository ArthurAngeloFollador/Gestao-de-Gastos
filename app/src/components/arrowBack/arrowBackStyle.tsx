import styled from "styled-components";

export const ArrowBackStyle = styled.header`
  cursor: pointer;
  position: sticky;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
  z-index: 100;

  & img {
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
  }
`;
