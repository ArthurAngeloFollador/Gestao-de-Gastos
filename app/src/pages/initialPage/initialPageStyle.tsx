import styled from "styled-components";
import devices from "../../styles/breakpoints";

export const InitialPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 8em;
  padding-top: 8em;
  background-color: #0d0d0d;
  color: #f0f0f0;
  gap: 60px;
  width: 100%;
  margin-top: 80px;

  @media ${devices.laptopL}{
    width: 100%;
  }

  @media ${devices.laptop} {
    width: 100%;
  }
  
  @media ${devices.mobileS} {
    gap: 20px;
    margin-top: 40px;
  }

  @media ${devices.tablet} {
    gap: 20px;
  }

`;

export const InitialPageTitle = styled.h1`
  font-size: 80px;
  font-weight: bold;

  @media ${devices.laptop} {
    font-size: 60px;
  }

  @media ${devices.mobileL} {
    font-size: 40px;
  }

  @media ${devices.mobileS} {
    font-size: 36px;
  }

  @media ${devices.tablet} {
    font-size: 50px;
  }
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
  gap: 10px;
  width: 100%;
  color: #f0f0f0;
  gap: 40px;
  margin-top: 80px;
  margin-bottom: 80px;

  @media ${devices.mobileS}{

  }

  @media ${devices.tablet} {
    flex-direction: column;
    padding: 10px;
    margin-top: 0;
    margin-bottom: 0;

    /* background-color: red; */
  }
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  padding: 40px;

  @media ${devices.laptopL} {
    gap: 8em;
    padding: 20px;
  }

  @media ${devices.laptop} {
    gap: 20px;
    padding: 20px;
  }

  @media ${devices.tablet} {
    gap: 80px;
    padding: 20px;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
  }
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
