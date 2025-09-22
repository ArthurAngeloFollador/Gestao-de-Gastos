import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 5px;
  padding-right: 30px;
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #171717;
  color: #F0F0F0;
  border-bottom: 1px solid black;
  box-shadow: 0 0 10px #000000;
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  & img {
    width: 80px;
    height: 80px;
    background: transparent;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 50px;

  & p {
    cursor: pointer;
  }
`

export const LoginButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & button {
    cursor: pointer;
    color: #F0F0F0;
    /* font-weight: bold; */
    font-size: 18px;
    background-color: #3b82f6;
    width: 120px;
    height: 45px;
    border-radius: 10px;
    border: none;
  }

 & p {
    position: relative;
    cursor: pointer;
    font-size: 18px;
    width: 120px;
    height: 45px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #171717; /* fundo interno */
    z-index: 0;
    overflow: hidden;
  }

  & p::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    padding: 2px; /* espessura da borda */
    background: linear-gradient(
      90deg,
      #3B82F6,
      #6530FC,
      #303EFC,
      #30BFFC,
      #A730FC,
      #848CFC
    );
    background-size: 300% 300%;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: gradientMove 4s linear infinite;
    z-index: -1;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`