import React from "react";
import styled from "styled-components";
import axios from "axios";

const FooterBox2 = styled.footer`
  position: absolute;

  left: 0;

  bottom: 0;

  width: 100%;

  padding: 15px 0;

  text-align: center;

  color: white;

  background: grey;
`;

const FooterBox = () => {
  return <FooterBox2>This is Footer</FooterBox2>;
};

export default FooterBox;
