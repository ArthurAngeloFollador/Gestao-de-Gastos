import { type InputHTMLAttributes } from "react";
import styled from "styled-components";
import Checked from "../../assets/imgs/check_42dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.png";

const BaseInput = styled.input`
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

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  display: grid;
  place-content: center;
  width: 15px;
  height: 15px;
  border-radius: 4px;
  border: #6e737b solid 1px;
  transition: box-shadow 0.5s ease-in-out;
  outline: none;

  &::before{
    content: "";
    background-color: transparent;
    height: 15px;
    width: 15px;
    border-radius: 4px;
  }

  &:checked::before{
    background-image: url(${Checked});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:hover {
    box-shadow: 0 0 20px 1px #3f4041;
  }

  /* &:checked {
    background-image: url(${Checked});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  } */
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Inputs = () => null;

Inputs.Large = ({ ...props }: InputProps) => {
  return <LargeInput {...props} />;
};

Inputs.Checkbox = ({ ...props }: InputProps) => {
  return <CheckboxInput {...props} />;
};
export default Inputs;
