import { type InputHTMLAttributes } from "react";
import styled from "styled-components";

const BaseInput = styled.input`
  cursor: pointer;
  color: #f0f0f0;
  font-size: 18px;
  background-color: #171717;
  border-radius: 10px;
  border: #3f4041 solid 1px;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px 1px #3f4041;
  }

  &::placeholder {
    color: #6e737b;
  }
`;

const LargeInput = styled(BaseInput)`
  padding: 12px 24px;
  font-size: 18px;
  width: 450px;
  height: 60px;
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Inputs = () => null;

Inputs.Large = ({ ...props }: InputProps) => {
  return <LargeInput {...props} />;
};
export default Inputs;
