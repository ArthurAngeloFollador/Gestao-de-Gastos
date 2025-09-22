import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 550px;
  background-color: #0d0d0d;
  color: #f0f0f0;
  gap: 40px;
`;

export const CardTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
`;

export const CardText = styled.div`
  font-size: 20px;
  text-align: center;
  color: #6e737b;
  /* text-align: justify; */
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  
  & p { 
    text-align: center;
    align-content: center;
    width: 250px;
    height: 55px;
    background-color: #171717;
    color: #f0f0f0;
    border-radius: 10px;
    cursor: pointer;
    border: #3f4041 solid 1px;
  }
`;
