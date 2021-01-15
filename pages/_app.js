import App from 'next/app'
import Head from 'next/head'
import Layout from '../components/common/Layout';


const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" rel="stylesheet" key="test"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
}

export default MyApp