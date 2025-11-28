import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  padding: 5rem 15rem;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #f0f0f0;
  gap: 20px;
`;

export const PageTitle = styled.p`
  font-weight: bolder;
  text-align: start;
  font-size: 2.25rem;
`;

export const PageDescription = styled.p`
  font-weight: normal;
  text-align: start;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.seccondaryText};
`;

export const PageSubTitle = styled.p`
  font-weight: bold;
  text-align: start;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.25rem 4rem;
  align-items: center;
  justify-content: center;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  width: 100%;
  margin-bottom: 6rem;
`;

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LitteTitle = styled.p`
  font-weight: normal;
  text-align: start;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryText};
`

export const LittleDescription = styled.p`
  font-weight: normal;
  text-align: start;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.seccondaryText};
`

export const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Currency = styled.p`
  font-weight: normal;
  text-align: start;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.seccondaryText};
`