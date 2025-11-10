import styled from "styled-components";

export const DropDownBase = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  right: 0;
  flex-direction: column;
  border-radius: 15px;
  padding: 1rem;
  height: auto;
  width: auto;
  gap: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  color: #f0f0f0;
  font-size: 0.9rem;

  background-color: #2e2e2e;
`;

export const ProfilePicAndName = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  height: 6.25rem;
  border-bottom: 2px solid #424242;

  & img {
    position: absolute;
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
`;

export const NameAt = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-top: 10px;
  gap: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const At = styled.p`
  font-size: 15px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 0.2rem 1rem 0.2rem;
  border-bottom: 2px solid #424242;
`;

export const Link = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  align-items: center;

  & :last-child {
    margin-left: auto;
  }
`;

export const Logout = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  align-items: center;
  padding: .4rem .1rem
`;
