import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import styled from "styled-components";
import Link from "next/link";

const SignupForm2 = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  padding: 30px, 20px;
  background-color: black;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const List = styled(Col)`
  padding: 3px 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Rform = styled(Form)`
  width: 100%;
  background-color: red;
`;
const PassForm = styled(Input)`
  border-bottom: 2px solid #adadad;
  margin: 5px;
  padding: 10px 10px;

  width: 400px;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  height: 25px;
  background: none;
`;
const RRow = styled(Col)`
  color: white;
  background-color: none;
`;

const SignupButton = styled.button`
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  margin-top: 20px;
  margin-bottom: 10px;
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

const HomeButton = styled.a`
  text-align: center;
  margin: 30px;
  color: #ffd400;
  align-items: center;
  justify-contents: center;
  font-size: 60px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  position: absolute;
  justify-content: center;

  align-items: center;
  display: flex;
  flex-direction: row;
`;

const SignupForm = () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };

  return (
    <>
      <Wrapper>
        <Link href="/">
          <HomeButton>
            <a>cookieRun</a>
          </HomeButton>
        </Link>
      </Wrapper>
      <SignupForm2>
        <RRow span={12}>
          {/* 아이디 */}
          <List>
            <Rform.Item
              name={["user", "id"]}
              label="ID"
              rules={[{ required: true }]}
            >
              <PassForm type="text" placeholder="ID..." />
            </Rform.Item>
          </List>
          <List>
            <Rform.Item
              name={["user", "password"]}
              label="Password"
              rules={[{ required: true }]}
            >
              <PassForm type="password" placeholder="Password..." />
            </Rform.Item>
          </List>
          <List>
            <Rform.Item
              name={["user", "Check password"]}
              label="Check Password"
              rules={[{ required: true }]}
            >
              <PassForm type="password" placeholder="Check your Password" />
            </Rform.Item>
          </List>
          <List>
            <Rform.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ required: true }]}
            >
              <PassForm type="email" placeholder="Email..." />
            </Rform.Item>
          </List>
          <List>
            <Rform.Item
              name={["user", "Q1"]}
              label="Motivation"
              rules={[{ required: true }]}
            >
              <PassForm
                type="text"
                placeholder="Why do you want to become a memder?"
              />
            </Rform.Item>
          </List>
          <List>
            <Rform.Item
              name={["user", "Q2"]}
              label="Favorite Cookie"
              rules={[{ required: true }]}
            >
              <PassForm
                type="text"
                placeholder="What is your favorite Chracter?"
              />
            </Rform.Item>
          </List>

          <SignupButton>SIGN UP</SignupButton>
        </RRow>
      </SignupForm2>
    </>
  );
};

export default SignupForm;
