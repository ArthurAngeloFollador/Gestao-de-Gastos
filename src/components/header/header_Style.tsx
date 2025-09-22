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
  color: #f0f0f0;
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
`;

export const Links = styled.div`
  display: flex;
  gap: 50px;

  & p {
    cursor: pointer;
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & button {
    cursor: pointer;
    color: #f0f0f0;
    /* font-weight: bold; */
    font-size: 18px;
    background-color: #3b82f6;
    width: 120px;
    height: 45px;
    border-radius: 10px;
    border: none;
  }

  /* declaramos a propriedade customizada para animar o ângulo */
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
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
    background: conic-gradient(
      from var(--angle),
      #3b82f6,
      #6530fc,
      #303efc,
      #30bffc,
      #a730fc,
      #848cfc,
      #3b82f6
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: spinColors 4s linear infinite;
    z-index: -1;
  }

  @keyframes spinColors {
    to {
      --angle: 360deg;
    }
  }
`;
