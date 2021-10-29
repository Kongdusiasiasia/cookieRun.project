import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

const MyApp = ({ Component }) => {
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
