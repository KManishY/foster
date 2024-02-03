import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import Pin from "./Genric/Pin";
const url = "";

const Login = () => {
  const [number, setNumber] = useState("");
  const [loginUi, setLoginUi] = useState(true);
  const [pinInput, setPinInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSetPin = (value) => {
    setPinInput(value);
  };

  const handleFetch = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("phone", "9818979450");
    urlencoded.append("otp", "123456");
    urlencoded.append("dial_code", "+91");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };

    fetch("https://staging.fastor.in/v1/pwa/user/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const token = result.data.token;
        localStorage.setItem("manish-authToken", token);
        navigate('/products')
        
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Wrapper>
      {loginUi && <H2>Enter Your Mobile Number</H2>}
      {!loginUi && <H2>OTP Verification</H2>}
      {loginUi && <P>We will send you 4 digit verification code</P>}
      {!loginUi && <P>We will send you 4 digit verification code</P>}
      {loginUi && (
        <Input
          type="tel"
          onChange={handleChange}
          placeholder="Enter Mobile Number"
          pattern="[0-9]{10}"
        />
      )}

      {!loginUi && (
        <PinWrapper>
          <Pin length={6} perInputBox={1} setPinFn={handleSetPin} />
        </PinWrapper>
      )}
      {loginUi && (
        <Button onClick={() => setLoginUi((p) => !p)}>Send Code</Button>
      )}
      {!loginUi && <Button onClick={handleFetch}>Verify</Button>}
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  /* border: 2px solid black; */
  padding: 1rem;
`;

const Input = styled.input`
  width: 95%;
  /* max-width: 300px; */
  font-size: 18px;
  height: 30px;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 10px;
`;

const H2 = styled.h3`
  display: block;
  text-align: left;
  padding: 0.5rem;
  font-size: 26px;
  color: #1E232C;
  font-weight: 700;
  line-height: 33.8px;
`;

const P = styled.p`
  text-align: center;
  margin-top: -20px;
  margin-bottom: 40px;
  width: 100%;
  display: block;
  color: #8391a1;
  font-size: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6d6a;
  color: white;
  width: 100%;
  height: 50px;
  margin: 1rem 0;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const PinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  .input-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .input-pin {
    width: 3rem;
    height: 3rem;
    text-align: center;
    border: 2px solid #333;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.25rem;
    margin: 0.25rem;
    box-sizing: border-box;
  }
`;
