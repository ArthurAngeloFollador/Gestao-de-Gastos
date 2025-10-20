import styled from "styled-components";

export const Accountsdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 10px;
  padding-right: 40px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IndividualAccount = styled.div`
  cursor: pointer;
  display: flex;
  width: 1000px;
  height: 100%;
  background-color: #3636368d;
  border-radius: 12px;
  padding: 25px;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #363636;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LittleText = styled.p`
  color: #6e6e6e;
  color: 3f4041;
  font-size: 16px;
`;

export const ImgAndTextAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & img {
    width: 48px;
    height: 48px;
    background-color: #3b82f6;
    padding: 8px;
    border-radius: 10px;
    //Change svg color
  }
`;

export const AmountInAccount = styled.p`
  font-size: 20px;
`;
