import App from "next/app";
import Head from "next/head";

import "../style/custom-antd.less";
import "../style/main.scss";
import Layout from "../components/common/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
