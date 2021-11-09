import React ,{Children, useEffect,useState}from "react";
import ReviewForm from "../components/ReviewBox";
import HeaderBox from "../components/HeaderBox";
import styled from "styled-components";
import "antd/dist/antd.css";



const Review = () => {
  return (
    <>
      <HeaderBox />
      <ReviewForm />
 
    </>
  );
};

export default Review;
