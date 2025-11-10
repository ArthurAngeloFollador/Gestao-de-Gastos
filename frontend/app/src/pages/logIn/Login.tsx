import {
  InputContainer,
  LoginSubText,
  LoginText,
  TextContainer,
} from "./loginStyle";
import Inputs from "../../components/inputs/InputStyles";
import LogoNoBg from "../../assets/imgs/logo_no_bg.png";
import Buttons from "../../components/buttons/ButtonStyles";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import ArrowBack from "../../components/arrowBack/ArrowBack";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    passwordHash: "",
  });

  const [errorMessage, setErrorMessage]: [
    string,
    (errorMessage: string) => void
  ] = useState("");

  async function onLogInClick() {
    if (!formData.email || !formData.passwordHash) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Try to login
    try {
      await login(formData.email, formData.passwordHash);
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error.message || "Error during signup");
    }
  }

  return (
    <>
      <ArrowBack />
      <TextContainer>
        <img src={LogoNoBg} />
        <LoginText>Welcome back to MoneyControl</LoginText>
        <LoginSubText>Log in to your account to continue</LoginSubText>
      </TextContainer>
      <InputContainer>
        <Inputs.Large
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <Inputs.Large
          type="password"
          placeholder="Password"
          value={formData.passwordHash}
          onChange={(e) => {
            setFormData({ ...formData, passwordHash: e.target.value });
          }}
        />
        <a
          className="passwordOrAccount"
          onClick={() => {
            navigate("/reset-password");
          }}
        >
          Forgot your password?
        </a>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <Buttons.SubmitLarge
          onClick={() => {
            onLogInClick();
          }}
        >
          Log In
        </Buttons.SubmitLarge>
        <a
          className="passwordOrAccount"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Don't have an account? Sign Up
        </a>
      </InputContainer>
    </>
  );
}

export default Login;
