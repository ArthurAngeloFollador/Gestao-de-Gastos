import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  height: 100%;
`;

export const DashboardContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 260px;
`;

export const DashboardTitle = styled.h1`
  font-weight: bold;
  text-align: start;
  font-size: 30px;
  color: #f0f0f0;
  margin: 0;
`;

export const DashboardInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  gap: 15px;
  padding: 5px 10px;
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Cards = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding-right: 45px;
`;
