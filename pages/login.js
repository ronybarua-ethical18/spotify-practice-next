import React from "react";
import { getProviders } from "next-auth/react";
import Login from "../components/Login";

function index({ providers }) {
  return <Login providers={providers}/>;
}

export default index;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
