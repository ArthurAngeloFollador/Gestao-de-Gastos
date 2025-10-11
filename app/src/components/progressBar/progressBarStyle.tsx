import styled from "styled-components";

export const BarContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: end;
`;

export const Bar = styled.div`
    background-color: aqua;
    height: 100%;
    transition: 0.5s ease-in;
`;

export const BackgroundBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 200px;
    height: 10px;
    border-radius: 10px;
    justify-content: center;
    overflow-x: hidden;
    background-color: #4d4d4d;
`;

export const PercentgeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 10vh;
`;

export const PercentageText = styled.p`
    font-size: 18px;
    color: #f0f0f0;
`;