import React, { useCallback, useState } from "react";
import styled from "styled-components";
// import axios from "axios";

const Section = styled.section`
  width: 100%;
  height: 720px;
  padding: 0px;

  display: flex;
  flex-direction: row;
`;
const PutButton = styled.button`
  width: 40px;
  height: 100%;

  backgruond: none;
  border: none;
  outline: none;

  border-radius: 0px;
  background-color: black;
  color: #fff;
  cursor: pointer;
  transiton: 0.5s;
  $:hover {
    background-color: white;
  }
`;

const ImageBox2 = styled.div`
  width: calc(100% - 80px);
  height: 100%;
`;

const ViewImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const ImageView = () => {
  const [viewIndex, SetviewIndex] = useState(0);

  const images = [
    "https://i.ytimg.com/vi/gns45Wk7AQY/maxresdefault.jpg",
    "https://cdn.news2day.co.kr/data2/content/image/2021/10/28/.cache/512/20211028500215.jpg",
  ];

  const lastIndex = images.length - 1;
  const imageChangeHandlerPrev = useCallback(() => {
    if (viewIndex === 0) {
      return SetviewIndex(lastIndex);
    }
    SetviewIndex((prev) => prev - 1);
  }, [viewIndex, images]);

  const imageChangeHandlerNext = useCallback(() => {
    if (viewIndex === lastIndex) {
      return SetviewIndex((prev) => 0);
    }
    SetviewIndex((prev) => prev + 1);
  }, [viewIndex, images]);
  return (
    <Section>
      <PutButton onClick={imageChangeHandlerPrev}>Prev</PutButton>

      <ImageBox2 id="slider-div">
        {images.map((image, index) => {
          if (index === viewIndex) {
            return <ViewImage src={image} alt={image} />;
          }
        })}
      </ImageBox2>
      <PutButton onClick={imageChangeHandlerNext}>Next</PutButton>
    </Section>
  );
};
export default ImageView;
