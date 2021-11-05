import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Input } from "antd";
import Link from "next/link";
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const LoginForm = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  padding: 30px, 20px;
  background-color: black;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const IdForm = styled(Input)`
  border-bottom: 2px solid #adadad;
  margin: 30px;
  padding: 10px 10px;

  width: 100%;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  height: 25px;
  background: none;
`;

const PassForm = styled(Input)`
  border-bottom: 2px solid #adadad;
  margin: 30px;
  padding: 10px 10px;

  width: 100%;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  height: 25px;
  background: none;
`;

const LoginButton = styled.button`
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  margin-bottom: 40px;
  width: 80%;
  height: 40px;
  background: linear-gradient(125deg, #81ecec, #6c5ce7, #81ecec);
  background-position: left;
  background-size: 200%;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  display: inline;
`;

const LoginText = styled.h2`
  text-align: center;
  margin: 30px;
  color: white;
`;

const HomeButton = styled.a`
  text-align: center;
  margin: 30px;
  color: #ffd400;
  align-items: center;
  justify-contents: center;
  font-size: 60px;
  cursor: pointer;
`;

const LoginShell = () => {
  return (
    <>
      <Wrapper>
        <Link href="/">
          <HomeButton>
            <a>cookieRun</a>
          </HomeButton>
        </Link>
      </Wrapper>
      <LoginForm>
        <LoginText>LOGIN</LoginText>
        <IdForm type="text" placeholder="ID" />
        <PassForm type="password" placeholder="Password" />
        <LoginButton>LOGIN</LoginButton>
      </LoginForm>
    </>
  );
};

export default LoginShell;
