import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import Router from "next/router";
import LoginPage from "./front/pages/login";

const MyApp = ({ Component }) => {
  const targerPage = "/test";
  Router.push(LoginPage);
  return (
    <>
      <Head>
        <title>cookieRun</title>
      </Head>
      <Component />
    </>
  );
};

export default MyApp;
