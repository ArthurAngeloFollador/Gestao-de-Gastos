import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;

  & img {
    width: 125px;
    height: 125px;
    background: transparent;
  }
`;

export const LoginText = styled.p`
  color: #f0f0f0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

export const LoginSubText = styled.p`
  color: #7c828d;
  font-size: 20px;
  text-align: center;
`;

export const InputContainer = styled.div`
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  align-items: center;
  justify-content: center;
  margin-left: 28.5em;
  margin-right: 28.5em;
  margin-top: 0.5em;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 5px;
  padding-left: 5px;

  .passwordOrAccount {
    cursor: pointer;
    color: #3b82f6;
    font-size: 16px;
    text-align: end;
    justify-content: end;
    margin-top: 0.5em;
    margin-right: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-style: normal;

    &:hover {
      text-decoration: underline;
    }
  }
`;