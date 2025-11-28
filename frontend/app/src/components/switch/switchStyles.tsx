import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const SwitchTrack = styled.div<{ isOn: boolean }>`
  width: 46px;
  height: 24px;
  background-color: ${({ isOn }) => (isOn ? "#3b82f6" : "#555")};
  border-radius: 24px;
  padding: 3px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
`;

export const SwitchThumb = styled.div<{ isOn: boolean }>`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.25s ease;
  transform: translateX(${({ isOn }) => (isOn ? "22px" : "0px")});
`;
