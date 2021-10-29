import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Row, Col } from "antd";
import { Header } from "antd/lib/layout/layout";

const TopBox = styled(Row)`
  width: 100%;
  height: 60px;
  background-color: black;
  margin-botoom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10 px;
`;
const LoginButton = styled(Col)`
  outline: none;
  border: none;
  background: none;
  width: 65px;
  height: 26px;

  background-color: white;
  color: black;
  border-radius: 10px;

  cursor: pointer;
  text-align: center;
`;

const RegistButton = styled(Col)`
  outline: none;
  border: none;
  background: none;
  width: 65px;
  height: 26px;

  background-color: white;
  color: black;
  border-radius: 10px;

  cursor: pointer;
  text-align: center;
`;

const LogoButton = styled(Col)`
  outline: none;
  border: none;
  background: none;
  width: 20%;
  height: 100%;

  background-color: black;

  cursor: pointer;

  font-size: 24px;
  color: #ffd400;
  font-weight: bold;
  text-shadow: 3px 3px 2px #555;
  padding: 13px;
`;
const ReviewButton = styled(Col)`
  outline: none;
  border: none;
  background: none;
  width: 20%;

  background-color: black;

  cursor: pointer;

  font-size: 16px;
  color: white;
  font-weight: bold;
  text-shadow: 3px 3px 2px #555;
  padding: 13px;
  text-align: right;
`;

const CharacterButton = styled(Col)`
  outline: none;
  border: none;
  background: none;
  width: 20%;

  background-color: black;

  cursor: pointer;

  font-size: 16px;
  color: white;
  font-weight: bold;
  text-shadow: 3px 3px 2px #555;
  padding: 13px;
`;

const HeaderBox = () => {
  return (
    <TopBox>
      <LogoButton span={6}>cookieRun</LogoButton>
      <ReviewButton span={6}>리뷰게시판</ReviewButton>
      <CharacterButton span={6}>쿠키소개</CharacterButton>
      <RegistButton span={2}>회원가입</RegistButton>
      <LoginButton span={2}>로그인</LoginButton>
    </TopBox>
  );
};

export default HeaderBox;
