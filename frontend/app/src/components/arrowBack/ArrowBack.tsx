import ArrowLeft from "../../assets/svgs/arrowLeft.svg";
import { useNavigate } from "react-router";
import { ArrowBackStyle } from "./arrowBackStyle";

function ArrowBack() {
  const navigate = useNavigate();

  return (
    <ArrowBackStyle>
      <img src={ArrowLeft} onClick={() => navigate(-1)} />
    </ArrowBackStyle>

    
  );
}

export default ArrowBack;
