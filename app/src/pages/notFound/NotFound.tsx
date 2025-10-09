import { GoAlert } from "react-icons/go";
import * as S from "./notFoundStyle";
import Buttons from "../../components/buttons/ButtonStyles";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
  return (
    <>
      <S.NotFoundContainer>
        <GoAlert color="#3b82f6" size={120} />
        <S.NotFoundTitle>404</S.NotFoundTitle>
        <S.NotFoundSubText>Page Not Found</S.NotFoundSubText>
        <S.Message>Oops! The page you are looking for doesn't exist. It might have been moved or deleted.</S.Message>
        <Buttons.Large onClick={() => navigate("/dashboard")}>Back to Dashboard</Buttons.Large>
      </S.NotFoundContainer>
    </>
  );
}

export default NotFound;
