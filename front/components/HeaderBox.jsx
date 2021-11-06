import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Row, Col } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";

const Global = styled.body`
  margin: 0;
  padding: 0;
`;
const TopBox = styled(Row)`
  width: 100%;
  height: 60px;
  background-color: black;
  margin-botoom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 px;
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

const LogoButton = styled.a`
  outline: none;
  border: none;
  background: none;
  width: 20%;
  height: 50%;

  background-color: black;

  cursor: pointer;

  font-size: 24px;
  color: #ffd400;
  font-weight: bold;
  text-shadow: 3px 3px 2px #555;
  padding: 13px;
  text-align: center;
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
    <Global>
      <TopBox>
        <Link href="/">
          <LogoButton span={6}>
            <a>cookieRun</a>
          </LogoButton>
        </Link>
        <Link href="/review">
          <ReviewButton span={6}>
            <a>리뷰게시판</a>
          </ReviewButton>
        </Link>
        <Link href="/introduce">
          <CharacterButton span={6}>
            <a>쿠키소개</a>
          </CharacterButton>
        </Link>
        <Link href="/signup">
          <RegistButton span={2}>
            <a>회원가입</a>
          </RegistButton>
        </Link>
        <Link href="/login">
          <LoginButton span={2}>
            <a>로그인</a>
          </LoginButton>
        </Link>
      </TopBox>
    </Global>
  );
};

export default HeaderBox;
