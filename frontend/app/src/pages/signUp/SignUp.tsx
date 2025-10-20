import { useState } from "react";
import ArrowBack from "../../components/arrowBack/ArrowBack";
import LogoNoBg from "../../assets/imgs/logo_no_bg.png";
import Inputs from "../../components/inputs/InputStyles.tsx";
import { useNavigate } from "react-router";
import Buttons from "../../components/buttons/ButtonStyles";
import type { AuthContextType } from "../../contexts/AuthContext";
import { useAuth } from "../../hooks/useAuth.ts";

import {
  InputContainer,
  SignUpSubText,
  SignUpTitle,
  TextContainer,
} from "./signUpStyle";

function SignUp() {
  const navigate = useNavigate();
  const { signupUser }: AuthContextType = useAuth();

  const [username, setUsername]: [string, (username: string) => void] =
    useState("");
  const [email, setEmail]: [string, (email: string) => void] = useState("");
  const [password, setPassword]: [string, (password: string) => void] =
    useState("");
  const [confirmPassword, setConfirmPassword]: [
    string,
    (confirmPassword: string) => void
  ] = useState("");

  const [errorMessage, setErrorMessage]: [
    string,
    (errorMessage: string) => void
  ] = useState("");

  const onSignUpClick = async () => {
    if (!username || !email || !password || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    if(confirmPassword !== password) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const response = await signupUser(username, email, password);

    if ("error" in response) {
      setErrorMessage(response.error);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <ArrowBack />
      <TextContainer>
        <img src={LogoNoBg} />
        <SignUpTitle>Create your account</SignUpTitle>
        <SignUpSubText>And take control of your finances</SignUpSubText>
      </TextContainer>
      <InputContainer>
        <Inputs.Large
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
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
        <Inputs.Large
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Buttons.SubmitLarge
          onClick={() => {
            onSignUpClick();
          }}
        >
          Sign Up
        </Buttons.SubmitLarge>
        <a
          onClick={() => {
            navigate("/login");
          }}
          className="passwordOrAccount"
        >
          Already have an account? Log In
        </a>
      </InputContainer>
    </>
  );
}

export default SignUp;
