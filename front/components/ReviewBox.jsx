import React, { useState,useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import { Modal, Button,Input } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";

const ModalButton = styled.div`
  text-align: center;
  background-color: #ffd400;
  color: black;
  width: 100px;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const sectionArea = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
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
const MemoTextArea = styled(Input.TextArea)`
resize : none;
height : 200px !important;
padding : 10px;
`;
const TitleTextArea = styled(Input.TextArea)`
resize : none;
height : 50px !important;
padding : 10px;
`;

const ReviewForm = ({children}) => {
  const [openModal,setOpenModal] = useState(false);
  const [reviewValue, setReviewValue] = useState(``);
  const [titleValue, setTitleValue] = useState(``);

  const reviewChangeHandler = (e) => {
      setReviewValue(e.target.value);
      
  };
  const titleChangeHandler = (e) => {
    setTitleValue(e.target.title);
    
};


  const modalToggle = useCallback(()=>{
  
      setOpenModal((prev)=>!prev);
      setReviewValue(``);
      setTitleValue(``);
      
      // 지역 => 전역 >> 전역 => 전역
  },[openModal]);

  const createHandler = useCallback(async()=>{
     
      if(reviewValue ===``){
          return alert("내용을 입력해주세요");
      }
      if(titleValue ===``){
        titleValue ===`제목 없음`;
      }


      const result = await axios.post ("http://localhost:4000/review/create",{
          value:reviewValue,
          title:titleValue,
      });
      if(result.data.result){
          modalToggle();
          window.location.reload();
      }
  },[reviewValue],[titleValue]);

  return (
    <>

      <Wrapper>

        <Boxbox />
      
        <Wrapper2>
          <Boxbox2 />
          <ModalButton type="primary" onClick={modalToggle}>
          게시물 쓰기
        </ModalButton>
        </Wrapper2>
        <Boxbox3 />
        <Wrapper2>
          <TitleBox>자유 게시판</TitleBox>
        </Wrapper2>
        <Boxbox3 />
        <Wrapper2>
          <TitleBox2>{children}</TitleBox2>
        </Wrapper2>
      </Wrapper>
      <Modal
          title="게시물 쓰기"
          visible={openModal}
          onOk={createHandler}
          onCancel={modalToggle}
          >
     <TitleTextArea allowClear={true} title={titleValue} onChange={titleChangeHandler} placeholder="제목"/>      
<MemoTextArea allowClear={true} value={reviewValue} onChange={reviewChangeHandler} placeholder="내용"/>
        </Modal>
    </>
  );
};

export default ReviewForm;
