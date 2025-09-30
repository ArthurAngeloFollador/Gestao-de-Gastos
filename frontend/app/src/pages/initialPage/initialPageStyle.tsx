import styled from "styled-components";

export const InitialPageStyled = styled.div`
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

export const InitialPageTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;
`;

export const InitialPageTextHero = styled.div`
  font-size: 20px;
  text-align: center;
  color: #6e737b;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const Ad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 550px;
  color: #f0f0f0;
  gap: 40px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const AdTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

export const AdText = styled.p`
  font-size: 20px;
  text-align: center;
  color: #6e737b;
  margin-top: 0;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 80px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
`;

export const AllCardText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #f0f0f0;
  gap: 20px;
  width: 300px;
`;
export const CardTittle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const CardText = styled.p`
  font-size: 16px;
`;

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 70px;
  border-radius: 46%;
  background-color: #3b83f629;

  & img {
    width: 40px;
    height: 40px;
    background: transparent;
  }
`;
