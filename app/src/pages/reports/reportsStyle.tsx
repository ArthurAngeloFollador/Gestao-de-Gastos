import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #f0f0f0;
  gap: 20px;
`;

export const ReportTypes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid #696969;
  /* padding: 1.5rem 0; */
`;

export const ReportType = styled.p`
  cursor: pointer;
  color: #696969;
  font-size: 1.2rem;
  text-align: center;
  padding: 1.5rem 0;
  transition: all 0.2s ease-in;

  &:hover {
    color: #9b9b9b;
  }

  &.active {
    color: aqua;
    /* font-weight: bold; */
    border-bottom: 2px solid aqua;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const InformationCardsCpntainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: .5rem;
  width: 100%;
  height: 100%;
  font-weight: light;
  font-size: .9rem;
  width: 100%;
  height: 1.25rem;
  padding: 0 .313rem;
  align-items: center;
  justify-content: start;
`;

export const SubmitButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: end;
`;