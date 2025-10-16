import styled from "styled-components";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

const BaseButton = styled.button`
  cursor: pointer;
  color: #f0f0f0;
  font-size: 18px;
  background-color: #3b82f6;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  gap: 10px;

  -webkit-user-drag: none;
  user-select: none;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 1px #3b82f6;
  }
`;

const LargeButton = styled(BaseButton)`
  padding: 12px 24px;
  font-size: 18px;
  width: 250px;
  height: 55px;
`;

const LargeNoBgButton = styled(BaseButton)`
  text-align: center;
  align-content: center;
  width: 250px;
  height: 55px;
  background-color: #171717;
  color: #f0f0f0;
  border-radius: 10px;
  cursor: pointer;
  border: #3f4041 solid 1px;
`;

const SmallButton = styled(BaseButton)`
  padding: 6px 12px;
  font-size: 18px;
  width: 120px;
  height: 45px;
`;

const SmallBlinkingButton = styled(BaseButton)`
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

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
  transition: box-shadow 0.3s ease-in-out;

  &::before {
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
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
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

const SubmitLargeButton = styled(BaseButton)`
  padding: 6px 12px;
  font-size: 18px;
  width: 450px;
  height: 50px;
  font-weight: bold;
`;

const SubmitSmallButton = styled(BaseButton)`
  padding: 6px 12px;
  font-size: 18px;
  width: 340px;
  height: 40px;
  font-weight: bold;
`;

const SubmitSmallButtonLite = styled(SubmitSmallButton)`
  background-color: #4747478d;
  color: #b1b1b18d;

  &:hover{
    box-shadow: 0 0 5px 1px #cccccc8d;
  }
`;

interface ButtonProps {
  children: ReactNode;
}

interface SubButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

interface ButtonComponent extends React.FC<ButtonProps> {
  Large: React.FC<SubButtonProps>;
  Small: React.FC<SubButtonProps>;
  SmallBlinking: React.FC<SubButtonProps>;
  LargeNoBg: React.FC<SubButtonProps>;
  SubmitLarge: React.FC<SubButtonProps>;
  SubmitSmall: React.FC<SubButtonProps>;
  SubmitSmallLite: React.FC<SubButtonProps>;
}

const Buttons: ButtonComponent = ({ children }) => {
  return <>{children}</>;
};

Buttons.Large = ({ children, ...rest }) => (
  <LargeButton {...rest}>{children}</LargeButton>
);

Buttons.Small = ({ children, ...rest }) => (
  <SmallButton {...rest}>{children}</SmallButton>
);

Buttons.SmallBlinking = ({ children, ...rest }) => (
  <SmallBlinkingButton {...rest}>{children}</SmallBlinkingButton>
);

Buttons.LargeNoBg = ({ children, ...rest }) => (
  <LargeNoBgButton {...rest}>{children}</LargeNoBgButton>
);

Buttons.SubmitLarge = ({ children, ...rest }) => (
  <SubmitLargeButton {...rest}>{children}</SubmitLargeButton>
);

Buttons.SubmitSmall = ({ children, ...rest }) => (
  <SubmitSmallButton {...rest}>{children}</SubmitSmallButton>
);

Buttons.SubmitSmallLite = ({ children, ...rest }) => (
  <SubmitSmallButtonLite {...rest}>{children}</SubmitSmallButtonLite>
);
export default Buttons;
