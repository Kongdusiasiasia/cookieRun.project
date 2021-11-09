import React from "react";
import ReviewForm from "../components/ReviewBox";
import HeaderBox from "../components/HeaderBox";
import styled from "styled-components";
import "antd/dist/antd.css";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Wrapper2 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
const Boxbox = styled.section`
  border: none;
  background-color: white;
  width : 100%;
  height 50px;
`;
const Boxbox3 = styled.section`
  border: none;
  background-color: white;
  width : 100%;
  height 15px;
`;
const Boxbox2 = styled.div`
  width: 66%;
  height: 20px;
`;
const TitleBox = styled.div`
  width: 80%;
  background-color: black;
  color: #ffd400;
  text-align:center;
  height 40px;
  font-size:25px;

`;
const TitleBox2 = styled.div`
  width: 80%;
  background-color: black;
  color: #ffd400;
  text-align:center;
  height 30px;
  font-size:15px;

`;
const Review = () => {
  return (
    <>
      <HeaderBox />
      <Wrapper>
        <Boxbox />
        <Wrapper2>
          <Boxbox2 />
          <ReviewForm />
        </Wrapper2>
        <Boxbox3 />
        <Wrapper2>
          <TitleBox>자유 게시판</TitleBox>
        </Wrapper2>
        <Boxbox3 />
        <Wrapper2>
          <TitleBox2>으나니랑 화장실 가야지</TitleBox2>
        </Wrapper2>
      </Wrapper>
    </>
  );
};

export default Review;
