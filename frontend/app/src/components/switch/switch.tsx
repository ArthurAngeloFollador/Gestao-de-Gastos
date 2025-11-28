import * as S from "./switchStyles";

import { useState } from "react";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Switch({ checked = false, onChange }: SwitchProps) {
  const [isOn, setIsOn] = useState(checked);

  const toggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange?.(newState);
  };

  return (
    <S.SwitchContainer onClick={toggle} role="switch" aria-checked={isOn}>
      <S.SwitchTrack isOn={isOn}>
        <S.SwitchThumb isOn={isOn} />
      </S.SwitchTrack>
    </S.SwitchContainer>
  );
}