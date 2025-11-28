import Buttons from "../../components/buttons/ButtonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import Inputs from "../../components/inputs/InputStyles";
import Switch from "../../components/switch/switch";

import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useThemeContext } from "../../hooks/useThemeContext";

import { useState } from "react";

import * as S from "./profileSettingsStyle";

function ProfileSettings() {
  const { user } = useAuth();

  const {isDark, toggleTheme} = useThemeContext();

  const navigate = useNavigate();

  const [enableNotifications, setEnableNotifications] = useState(true);

  return (
    <>
      <Header />
      <S.ProfileContainer>
        <S.PageTitle>Settings</S.PageTitle>
        <S.PageDescription>
          Manage your profile, security and aplication settings
        </S.PageDescription>
        <S.PageContent>
          <S.Section>
            <S.PageSubTitle>Personal Information</S.PageSubTitle>
            <S.InputsWrapper>
              <Inputs.Settings placeholder={user?.name} disabled={true} />
              <Inputs.Settings placeholder={user?.email} disabled={true} />
              <Inputs.Settings placeholder="Phone Number" disabled={true} />
            </S.InputsWrapper>
          </S.Section>

          <S.Section>
            <S.PageSubTitle>Security</S.PageSubTitle>
            <S.SectionRow>
              <S.TitleAndDescription>
                <S.LitteTitle>Change Password</S.LitteTitle>
                <S.LittleDescription>
                  It's a good idea to use a strong password that you're not
                  using elsewhere.
                </S.LittleDescription>
              </S.TitleAndDescription>
              <Buttons.Settings onClick={() => navigate("/reset-password")}>Change</Buttons.Settings>
            </S.SectionRow>
          </S.Section>

          <S.Section>
            <S.PageSubTitle>Notifications</S.PageSubTitle>
            <S.SectionRow>
              <S.TitleAndDescription>
                <S.LitteTitle>Enable Notifications</S.LitteTitle>
                <S.LittleDescription>
                  Recive notifications about your activity and updates.
                </S.LittleDescription>
              </S.TitleAndDescription>
              <Switch checked={enableNotifications} onChange={(e) => setEnableNotifications(e)} />
            </S.SectionRow>
          </S.Section>

          <S.Section>
            <S.PageSubTitle>App Settings</S.PageSubTitle>
            <S.SectionRow>
              <S.TitleAndDescription>
                <S.LitteTitle>Dark Mode</S.LitteTitle>
                <S.LittleDescription>
                  Choose between light and dark themes for the app interface.
                </S.LittleDescription>
              </S.TitleAndDescription>
              <Switch checked={isDark} onChange={toggleTheme} />
            </S.SectionRow>

            <S.SectionRow>
              <S.TitleAndDescription>
                <S.LitteTitle>Currency</S.LitteTitle>
                <S.LittleDescription>Select your preferred currency for dysplaying financial data.
                </S.LittleDescription>
              </S.TitleAndDescription>
              <S.Currency>USD</S.Currency>
            </S.SectionRow>

          </S.Section>
        </S.PageContent>
        <Buttons.SaveChanges>Save Changes</Buttons.SaveChanges>
      </S.ProfileContainer>
      <Footer />
    </>
  );
}

export default ProfileSettings;
