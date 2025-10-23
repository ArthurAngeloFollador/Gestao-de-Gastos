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
              <p>SOLUTIONS</p>
              <p className="tags">Marketing</p>
              <p className="tags">Analysis</p>
              <p className="tags">Commerce</p>
            </Section>
            <Section>
              <p>SUPPORT</p>
              <p className="tags">Prices</p>
              <p className="tags">Documentation</p>
              <p className="tags">Guides</p>
            </Section>
            <Section>
              <p>COMPANY</p>
              <p className="tags">About</p>
              <p className="tags">Blog</p>
              <p className="tags">Carrers</p>
            </Section>
            <Section>
              <p>LEGAL</p>
              <p className="tags">Privacy</p>
              <p className="tags">Terms</p>
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
