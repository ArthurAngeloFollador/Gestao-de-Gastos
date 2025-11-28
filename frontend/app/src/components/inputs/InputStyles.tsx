import styled from "styled-components";

import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes } from "react";
import Checked from "../../assets/imgs/check_42dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.png";

const BaseInput = styled.input`
  color: #f0f0f0;
  font-size: 18px;
  background-color: #171717;
  border-radius: 10px;
  border: #3f4041 solid 1px;
  transition: box-shadow 0.5s ease-in-out;
  outline: none;

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

  &::before {
    content: "";
    background-color: transparent;
    height: 15px;
    width: 15px;
    border-radius: 4px;
  }

  &:checked::before {
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

// modal inputs
const ModalMDInput = styled(BaseInput)`
  appearance: none;
  -webkit-appearance: none;

  cursor: pointer;
  padding: 12px 10px;
  font-size: 18px;
  width: 340px;
  height: 45px;
  margin-bottom: 1rem;

  /* remove spinners (Chrome, Safari, Opera, Edge) */
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* remove spinners (Firefox) */
  &[type="number"] {
    appearance: none;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
  }
`;

const ModalDatesInput = styled(BaseInput).attrs({ type: "date" })`
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding: 12px 10px;
  font-size: 18px;
  width: 160px;
  height: 45px;
  margin-bottom: 1rem;
`;

const PeriodType = styled.select`
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #f0f0f0;
  font-size: 18px;
  width: 340px;
  height: 45px;
  background-color: #171717;
  border-radius: 10px;
  border: #3f4041 solid 1px;
  transition: box-shadow 0.5s ease-in-out;
  outline: none;
  padding: 12px 10px;
  margin-bottom: .8rem;

  &:hover {
    box-shadow: 0 0 20px 1px #3f4041;
  }

  &::placeholder {
    color: #6e737b;
  }

  option {
    padding: 10px;
    border-radius: 8px;
  }
`;

const SettingsInput = styled(BaseInput)`
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding: 12px 10px;
  font-size: 18px;
  width: 340px;
  height: 45px;
  margin-bottom: 1rem;
  background-color: aliceblue;
  color: #171717;
`;

const ModalSubmitInput = styled.input.attrs({ type: "submit" })`
  background-color: #3b82f6;
  color: #f0f0f0;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 100px;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px 1px #3b82f6;
  }
`;

const ModalCancelInput = styled.input.attrs({ type: "reset" })`
  cursor: pointer;
  height: 45px;
  width: 100px;
  background-color: transparent;
  color: #f0f0f0;
  border: 1px solid #292929;
  border-radius: 10px;
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Inputs = () => null;

Inputs.Large = ({ ...props }: InputProps) => {
  return <LargeInput {...props} />;
};

Inputs.Checkbox = ({ ...props }: InputProps) => {
  return <CheckboxInput {...props} />;
};

Inputs.ModalMD = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <ModalMDInput {...props} ref={ref} />
));

Inputs.ModalDates = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <ModalDatesInput {...props} ref={ref} />
));

Inputs.SelectPeriodType = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => <PeriodType {...props} ref={ref} />
);

Inputs.Settings = ({ ...props }: InputProps) => {
  return <SettingsInput {...props} />;
};

Inputs.ModalSubmit = ({ ...props }: InputProps) => {
  return <ModalSubmitInput {...props} />;
};

Inputs.ModalCancelInput = ({ ...props }: InputProps) => {
  return <ModalCancelInput {...props} />;
};
export default Inputs;
