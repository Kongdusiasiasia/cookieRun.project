import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Modal, Button } from "antd";
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

const ReviewForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <sectionArea>
        <ModalButton type="primary" onClick={showModal}>
          게시물 쓰기
        </ModalButton>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </sectionArea>
    </>
  );
};

export default ReviewForm;
