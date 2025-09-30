import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #171717;
  color: #6e737b;
  padding: 40px 60px;
  border-top: 1px solid #2a2a2a;
  padding-top: 20px;
`;

export const LogoAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  padding-right: 30px;
  color: #f0f0f0;
  font-size: 20px;

  & img {
    width: 150px;
    height: 150px;
    background: transparent;
    border-radius: 50%;
  }
`;

export const Rights = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #6e737b;
  border-top: 1px solid #2a2a2a;
  padding-top: 20px;
`;

export const LogoContainer = styled.div`
  max-width: 250px;

  & img {
    width: 60px;
    height: 60px;
    margin-left: 0;
  }

  & p {
    margin: 0;
    line-height: 1.5;
  }
`;

export const LogoText = styled.p`
  padding: 20px;
`;

export const SuperiorLine = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;
  gap: 40px;
`;

export const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 25px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & p:first-child {
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
  }

  & p {
    margin: 0;
    cursor: pointer;
  }
`;
