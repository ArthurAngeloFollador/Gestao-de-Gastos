import { useEffect, useState } from "react";
import * as S from "./progressBarStyle";

interface Props {
    percentage: number
    showPercentage?: boolean
}

function ProgressBar({percentage, showPercentage}: Props) {

    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {setAnimatedProgress(percentage)}, 100);
    }, [percentage]);

  return (
    <>
      <S.BarContainer>
        <S.BackgroundBar>
            <S.Bar style={{transform: `translateX(${animatedProgress - 100}%)`}} />
        </S.BackgroundBar>
        <S.PercentgeContainer>
          <S.PercentageText>{showPercentage && `${animatedProgress}%`}</S.PercentageText>
        </S.PercentgeContainer>
      </S.BarContainer>
    </>
  );
}

export default ProgressBar;
