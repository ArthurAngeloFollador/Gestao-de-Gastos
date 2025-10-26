import { AiOutlinePlus } from "react-icons/ai";
import Buttons from "../buttons/ButtonStyles";
import * as S from "./conteinerStyled";

interface props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  hasButton: boolean;
  buttonText?: string;
  hasPlusIcon?: boolean;
}

function Container({
  children,
  title,
  description,
  hasButton,
  buttonText,
  hasPlusIcon,
}: props) {
  return (
    <>
      <S.ContainerPage>
        <S.ConteinerContent>
          <S.PageContainerHeader>
            <S.Text>
              <S.PageTitle>{title}</S.PageTitle>
              <S.LittleText>{description}</S.LittleText>
            </S.Text>
            {hasButton ? (
              hasPlusIcon ? (
                <Buttons.Large>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <AiOutlinePlus
                      style={{ color: "#f0f0f0", fontSize: "30px" }}
                    />
                    {buttonText}
                  </div>
                </Buttons.Large>
              ) : (
                <Buttons.Large>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    {buttonText}
                  </div>
                </Buttons.Large>
              )
            ) : null}
          </S.PageContainerHeader>
          {children}
        </S.ConteinerContent>
      </S.ContainerPage>
    </>
  );
}

export default Container;
