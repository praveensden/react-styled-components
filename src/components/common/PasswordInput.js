import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PasswordInputWrapper = styled.div`
  display: flex;
  align-items: center;
  ~ {
    margin-bottom: 8px;
  }
`;
const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  color: #000;
  margin-bottom: 8px;
`;
const PasswordInputStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props}></PasswordInputStyled>
        <ToggleButton onClick={() => setShowPassword((s) => !s)}>
          {showPassword ? "Hide" : "Show"}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ""}</div>
    </>
  );
};

export { PasswordInput };
