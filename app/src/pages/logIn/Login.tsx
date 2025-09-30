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
import type { AuthContextType } from "../../contexts/AuthContext";
import ArrowBack from "../../components/arrowBack/ArrowBack";

function Login() {
  const navigate = useNavigate();
  const { userLogin }: AuthContextType = useAuth();

  const [email, setEmail]: [string, (email: string) => void] = useState("");
  const [password, setPassword]: [string, (password: string) => void] =
    useState("");
  const [errorMessage, setErrorMessage]: [
    string,
    (errorMessage: string) => void
  ] = useState("");

  async function onLogInClick() {
    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const response = await userLogin(email, password);

    if ("error" in response) {
      setErrorMessage(response.error);
    } else {
      navigate("/dashboard");
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Inputs.Large
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
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
