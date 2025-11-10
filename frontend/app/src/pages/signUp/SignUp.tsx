import { useState } from "react";
import ArrowBack from "../../components/arrowBack/ArrowBack";
import LogoNoBg from "../../assets/imgs/logo_no_bg.png";
import Inputs from "../../components/inputs/InputStyles.tsx";
import { useNavigate } from "react-router";
import Buttons from "../../components/buttons/ButtonStyles";
import { useAuth } from "../../hooks/useAuth.ts";

import {
  InputContainer,
  SignUpSubText,
  SignUpTitle,
  TextContainer,
} from "./signUpStyle";

function SignUp() {
  const navigate = useNavigate();

  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passwordHash: "",
  });

  const [confirmPassword, setConfirmPassword]: [
    string,
    (confirmPassword: string) => void
  ] = useState("");

  const [errorMessage, setErrorMessage]: [
    string,
    (errorMessage: string) => void
  ] = useState("");

  const onSignUpClick = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.passwordHash ||
      !confirmPassword
    ) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    if (confirmPassword !== formData.passwordHash) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Try to signup
    try {
      await signup(formData.name, formData.email, formData.passwordHash);
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error.message || "Error during signup");
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
          placeholder="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
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
