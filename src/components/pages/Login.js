import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input, PageLayout, PasswordInput, Spinner } from "../common";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: #000;
  border-radius: 4px;
  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });
  let timeout;
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      console.log(formFields);
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);
  return (
    <>
      <PageLayout>
        <h1>Login</h1>
        <Form>
          {/* <Spinner />  */}
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Input
                value={formFields.username}
                type="text"
                onChange={handleChange}
                placeholder="Username"
                name="username"
              />
              <PasswordInput
                value={formFields.password}
                onChange={handleChange}
                name="password"
              />
            </>
          )}
          <Button onClick={handleSubmit} large disabled={loading}>
            {loading ? "Loading" : "Login"}
          </Button>
          {!loading && (
            <>
              <div className="alt-text">or</div>
              <Button onClick={handleSubmit} secondary>
                Register
              </Button>
            </>
          )}
        </Form>
      </PageLayout>
    </>
  );
};

export default Login;
