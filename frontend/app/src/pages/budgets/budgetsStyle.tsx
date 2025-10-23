import styled from "styled-components";

export const PageSubtitle = styled.p`
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 10px;
  color: #f0f0f0;
  font-size: 24px;
  text-align: start;
  font-weight: bold;
`;

// container for overviews
export const OverviewContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

// individual overview
export const Overviews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 38vw;
  height: 8vw;
  padding: 20px 25px;
  background-color: #3636368d;
  border: none;
  border-radius: 12px;
`;

export const TitleAndAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// title and amount
export const OverviewTitle = styled.p`
  color: #9e9e9e;
  font-size: 16px;
  text-align: start;
  user-select: none;
`;
export const OverviewAmount = styled.p`
  color: #f0f0f0;
  font-size: 40px;
  text-align: start;
`;

export const OverviewIcon = styled.div`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
`;

// container for categories
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

// individual category
export const Category = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  border: none;
  border-radius: 12px;
  background-color: #3636368d;
  padding: 10px;
`;

export const TitleAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CategoryTitle = styled.p`
  font-size: 18px;
  text-align: start;
`;

export const CategoryAmount = styled.p`
  font-size: 16px;
  text-align: start;
  color: #9e9e9e;
`;

export const CategoryIcon = styled.div`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
`;

export const CategoryProgressBarConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: end;
`;
