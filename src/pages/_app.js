import '../styles/main.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (<div>
        <Head>
            <title>Vol1ary: мой личный дневник</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Raleway:ital,wght@0,600;1,600&display=swap" rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
    </div>)
}

export default MyApp;
