import React from "react";
import Layout from "../components/Layout";
import StateContext from "../context/stateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState("CSS");
  return (
    <StateContext.Provider value={{ state, setState }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext.Provider>
  );
}
export default MyApp;
