import React, { useState } from "react";
import { styled } from "styled-components";
import Card from "../UI/card/Card";
import FormInput from "../UI/input/FormInput";
import Button from "../UI/button/Button";

const Login = ({ onSuccessfulLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    setEmailError(false); // Сбрасываем ошибку перед валидацией
    setPasswordError(false); // Сбрасываем ошибку перед валидацией

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError(true);
      return;
    }

    if (!password || password.length < 8) {
      setPasswordError(true);
      return;
    }

    onSuccessfulLogin();
  };

  return (
    <StyledCard>
      <StyledForm onError={emailError || passwordError}>
        {" "}
        {/* Передаем состояние ошибки в StyledForm */}
        <FormInput
          label="Email"
          containerClassName="field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onError={emailError ? true : undefined}
        />
        <FormInput
          label="Password"
          containerClassName="field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onError={passwordError ? true : undefined}
        />
        <StyledButton type="button" onClick={handleLogin}>
          Login
        </StyledButton>
      </StyledForm>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 50rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  margin-top: 5rem;
`;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .field {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .field > label {
    flex: 1;
  }
  .field > input {
    flex: 5;
    border-color: ${(props) => (props.onError ? "red" : "initial")};
  }
`;
const StyledButton = styled(Button)`
  align-self: center;
`;

export default Login;
