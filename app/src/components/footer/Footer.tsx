import {
  FooterStyled,
  LogoAndName,
  Rights,
  Section,
  Sections,
  LogoContainer,
  LogoText,
  SuperiorLine,
} from "./FooterStyle.tsx";
import logoNoBg from "../../assets/imgs/logo_no_bg.png";

function Footer() {
  return (
    <>
      <FooterStyled>
        <SuperiorLine>
          <LogoContainer>
            <LogoAndName>
              <img src={logoNoBg} alt="logo" />
              <p>MoneyControl</p>
            </LogoAndName>
            <LogoText>Financeral Control for your life</LogoText>
          </LogoContainer>
          <Sections>
            <Section>
              <p>SOLUÇÕES</p>
              <p className="tags">Marketing</p>
              <p className="tags">Análise</p>
              <p className="tags">Comércio</p>
            </Section>
            <Section>
              <p>SUPORTE</p>
              <p className="tags">Preços</p>
              <p className="tags">Documentação</p>
              <p className="tags">Guias</p>
            </Section>
            <Section>
              <p>EMPRESA</p>
              <p className="tags">Sobre</p>
              <p className="tags">Blog</p>
              <p className="tags">Carreiras</p>
            </Section>
            <Section>
              <p>LEGAL</p>
              <p className="tags">Privacidade</p>
              <p className="tags">Termos</p>
            </Section>
          </Sections>
        </SuperiorLine>
        <Rights>
          <p>© 2023 MoneyControl. All rights reserved.</p>
        </Rights>
      </FooterStyled>
    </>
  );
}

export default Footer;
